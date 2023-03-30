import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DivPaiRegistro, Form } from "./style";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { iEnviarRegistro } from "../../context/UserContext";

const schema = yup.object({
  email: yup.string().required("E-mail Obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha Obrigatoria")
    .matches(/[A-Z]/, "Deve conter no mínimo uma letra maiúscula")
    .matches(/[a-z]/, "Deve conter no mínimo uma letra minúscula")
    .matches(/(\d)/, "Deve conter no mínimo um número")
    .matches(/(\W)|_/, "Deve conter um caracter especial")
    .matches(/.{8,}/, "Deve conter no mínimo 8 dígitos"),
  passwordConfirm: yup
    .string()
    .required("Confirmar senha Obrigatório")
    .oneOf([yup.ref("password")], "Deve ser igual a Senha"),
  name: yup
    .string()
    .required("Nome Obrigatório")
    .matches(/.{4,}/, "Deve conter no mínimo 4 letras"),
  bio: yup
    .string()
    .required("Biografia Obrigatória")
    .matches(/.{6,}/, "Deve conter no mínimo 6 letras"),
  contact: yup
    .string()
    .required("Contato Obrigatório")
    .matches(/.{8,}/, "Deve conter no mínimo 8 letras"),
});

export const Registro = () => {
  const { enviarRegistro } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iEnviarRegistro>({
    resolver: yupResolver(schema),
  });

  const onSubmitRegistro = (data: iEnviarRegistro) => enviarRegistro(data);
  return (
    <DivPaiRegistro>
      <div className="divFilha">
        <h2>Kenzie Hub</h2>
        <Link className="linkRegistro" to="/">
          Voltar
        </Link>
      </div>
      <Form onSubmit={handleSubmit(onSubmitRegistro)}>
        <div>
          <h3>Crie sua conta</h3>
          <span>Rápido e gratis, vamos nessa</span>
        </div>

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          placeholder="Digite seu Email"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>

        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          placeholder="Digite sua Senha"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>

        <label htmlFor="senhaConfirm">Confirmar Senha</label>
        <input
          type="password"
          id="senhaConfirm"
          placeholder="Confirme sua Senha"
          {...register("passwordConfirm")}
        />
        <p>{errors.passwordConfirm?.message}</p>

        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          placeholder="Digite seu Nome"
          {...register("name")}
        />
        <p>{errors.name?.message}</p>

        <label htmlFor="bio">Sobre Você</label>
        <input
          type="text"
          id="bio"
          placeholder="Digite algo sobre você"
          {...register("bio")}
        />
        <p>{errors.bio?.message}</p>

        <label htmlFor="contato">Contato</label>
        <input
          type="text"
          id="contato"
          placeholder="Digite algum dos seus contatos"
          {...register("contact")}
        />
        <p>{errors.contact?.message}</p>

        <label htmlFor="modulo">Módulo do Curso</label>
        <select id="modulo" {...register("course_module", { required: true })}>
          <option value="1º módulo (introdução ao Frontend)">Modulo 1</option>
          <option value="2º Módulo (Frontend avançado)">Modulo 2</option>
          <option value="3º módulo (Introdução ao Backend)">Modulo 3</option>
          <option value="4º módulo (Backend Avançado)">Modulo 4</option>
        </select>
        <p>{errors.course_module?.message}</p>

        <button type="submit">Cadastrar</button>
      </Form>
    </DivPaiRegistro>
  );
};
