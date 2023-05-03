import { createContext, useEffect } from "react";
import { useState } from "react";
import { Api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iUsuarioState } from "./TechContext";

interface iTechs {
    title: string;
    status: string;
}

export interface iUsuario {
    id: string;
    name: string;
    email: string;
    course_module: string;
    bio: string;
    contact: string;
    techs: [iTechs];
}

interface iLoading {
    id: string;
    name: string;
    email: string;
    course_module: string;
    bio: string;
    contact: string;
    techs: [iTechs];
}

export interface iEnviarRegistro {
    email: string;
    password: string;
    name: string;
    bio: string;
    contact: string;
    course_module: string;
}

export interface iEnviarLogin {
    email: string;
    password: string;
}

interface iUserContext {
    loading: iLoading[];
    setLoading: React.Dispatch<React.SetStateAction<iLoading[]>>;
    usuarios: iUsuarioState;
    setUsuarios: React.Dispatch<React.SetStateAction<iUsuarioState>>;
    modal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    abrirModal: () => void;
    fecharModal: () => void;
    btnSair: () => void;
    enviarRegistro: (data: iEnviarRegistro) => void;
    enviarLogin: (data: iEnviarLogin) => void;
    getProfile: () => void;
}

interface iUserContextProps {
    children: React.ReactNode;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
    const [loading, setLoading] = useState<iLoading[]>([]);
    const [usuarios, setUsuarios] = useState<iUsuarioState>(
        {} as iUsuarioState
    );
    const [modal, setModal] = useState(false);
    const navegarParaLogin = useNavigate();
    const enviarDashboard = useNavigate();

    useEffect(() => {
        getProfile();
    }, []);

    async function getProfile() {
        const token = localStorage.getItem("@kenzieHub:token");

        if (token) {
            Api.defaults.headers.authorization = `Bearer ${token}`;
            Api.get("/profile")
                .then((res) => {
                    setUsuarios(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            navegarParaLogin("/");
        }
    }

    function abrirModal() {
        setModal(true);
    }

    function fecharModal() {
        setModal(false);
    }

    const btnSair = () => {
        localStorage.clear();
        setUsuarios({} as any);
        navegarParaLogin("/");
    };

    async function enviarRegistro(data: iEnviarRegistro) {
        await Api.post("/users", data)
            .then((res) => {
                console.log(res);
                toast.success("Registrado com Sucesso", {
                    position: "top-center",
                    autoClose: 2000,
                    theme: "colored",
                });
                navegarParaLogin("/");
            })
            .catch(
                (err) => (
                    console.log(err),
                    toast.error("Cadastro Invalido", {
                        position: "top-center",
                        autoClose: 2000,
                        theme: "colored",
                    })
                )
            );
    }

    async function enviarLogin(data: iEnviarLogin) {
        await Api.post("/sessions", data)
            .then((res) => {
                toast.success("Logado com Sucesso", {
                    position: "top-center",
                    autoClose: 2000,
                    theme: "colored",
                });
                setLoading(res.data.user);
                setUsuarios(res.data.user);
                localStorage.setItem("@kenzieHub:token", res.data.token);
                localStorage.setItem("@kenzieHub:id", res.data.user.id);
                enviarDashboard("/dashboard");
            })
            .catch((err) => {
                console.log(err);
                toast.error("Login Inválido", {
                    position: "top-center",
                    autoClose: 2000,
                    theme: "colored",
                });
            });
    }

    return (
        <UserContext.Provider
            value={{
                loading,
                setLoading,
                usuarios,
                setUsuarios,
                modal,
                setModal,
                abrirModal,
                fecharModal,
                btnSair,
                enviarRegistro,
                enviarLogin,
                getProfile,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
