import React, { useContext } from "react";
import { createContext, useState } from "react";
import { Api } from "../services/api";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";

export interface iTechs {
    id: string;
    title: string;
    status: string;
}
export interface iUsuarioState {
    id: string;
    name: string;
    email: string;
    course_module: string;
    bio: string;
    contact: string;
    techs: iTechs[];
    works: string;
    created_at: string;
    updated_at: string;
    avatar_url: null;
}
interface iTechContext {
    usuarioLogado: iUsuarioState;
    setUsuarioLogado: React.Dispatch<React.SetStateAction<iUsuarioState>>;
    createTech: (objeto: iTechs) => void;
    deleteTech: (id: string) => void;
}
interface iTechContextProps {
    children: React.ReactNode;
}

export const TechContext = createContext<iTechContext>({} as iTechContext);

export const TechProvider = ({ children }: iTechContextProps) => {
    const { getProfile } = useContext(UserContext);

    const [usuarioLogado, setUsuarioLogado] = useState<iUsuarioState>(
        {} as iUsuarioState
    );

    const token = localStorage.getItem("@kenzieHub:token");

    async function createTech(objeto: iTechs) {
        Api.defaults.headers.authorization = `Bearer ${token}`;

        await Api.post("/users/techs", objeto)
            .then((res) => {
                toast.success("Tarefa Adicionada", {
                    position: "top-center",
                    autoClose: 1000,
                    theme: "colored",
                });
                getProfile();
            })
            .catch((err) => {
                toast.error("Erro ao Adicionar Tarefa", {
                    position: "top-center",
                    autoClose: 1000,
                    theme: "colored",
                });
                console.log(err);
            });
    }

    async function deleteTech(id: string) {
        await Api.delete(`/users/techs/${id}`)
            .then((res) => {
                toast.success("Tarefa Deletada", {
                    position: "top-center",
                    autoClose: 1000,
                    theme: "colored",
                });
                getProfile();
            })
            .catch((err) => {
                toast.error("Erro ao Deletar Tarefa", {
                    position: "top-center",
                    autoClose: 1000,
                    theme: "colored",
                });
                console.log(err);
            });
    }

    return (
        <TechContext.Provider
            value={{ usuarioLogado, setUsuarioLogado, createTech, deleteTech }}
        >
            {children}
        </TechContext.Provider>
    );
};
