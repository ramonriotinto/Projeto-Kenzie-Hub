import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { DivPaiLogin, FormLogin } from "./style";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { iEnviarLogin } from "../../context/UserContext";

const schema = yup.object({
    email: yup.string().required("E-mail Obrigatorio").email("E-mail invalido"),
    password: yup.string().required("Senha Obrigatoria"),
});

export const Login = () => {
    const { enviarLogin } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<iEnviarLogin>({
        resolver: yupResolver(schema),
    });

    const onSubmitLogin = (data: iEnviarLogin) => enviarLogin(data);

    return (
        <DivPaiLogin>
            <div className="contH2">
                <h2>Kenzie Hub</h2>
            </div>

            <FormLogin onSubmit={handleSubmit(onSubmitLogin)}>
                <div className="contH3">
                    <h3>Login</h3>
                </div>

                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Digite seu e-mail"
                    {...register("email")}
                />
                <p>{errors.email?.message}</p>

                <label htmlFor="senha">Senha</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Digite sua senha"
                    {...register("password")}
                />
                <p>{errors.password?.message}</p>

                <button type="submit">Entrar</button>

                <div className="contCadastro">
                    <span>Ainda não possui uma conta?</span>
                    <Link className="linkResgt" to="/registro">
                        Cadastro
                    </Link>
                </div>
            </FormLogin>
        </DivPaiLogin>
    );
};
