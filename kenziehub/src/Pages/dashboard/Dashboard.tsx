import { useContext } from "react";
import { DivPaiDashboard, Conteudo, Navegacao, Header, FormTec } from "./style";
import { UserContext } from "../../context/UserContext";
import ReactModal from "react-modal";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./styleModal.css";
import { TechContext, iTechs } from "../../context/TechContext";

ReactModal.setAppElement("#root");

const schema = yup.object({
    title: yup.string().required("Título Obrigatório"),
});

export const Dashboard = () => {
    const { usuarios, modal, abrirModal, fecharModal, btnSair } =
        useContext(UserContext);

    const { createTech, deleteTech } = useContext(TechContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<iTechs>({ resolver: yupResolver(schema) });

    const onSubmitTec = (data: iTechs) => createTech(data);

    return (
        <DivPaiDashboard id="main-conteudo">
            <Navegacao>
                <div>
                    <h1>Kenzie Hub</h1>
                    <button onClick={() => btnSair()}>Sair</button>
                </div>
                <nav></nav>
            </Navegacao>
            <Header>
                <div>
                    <h2>Olá, {usuarios.name}</h2>
                    <p>{usuarios.course_module}</p>
                </div>
            </Header>
            <Conteudo>
                <div>
                    <h3>Tecnologias</h3>
                    <button onClick={() => abrirModal()}>+</button>
                </div>
                {usuarios.techs?.length > 0 ? (
                    <ul>
                        {usuarios.techs?.map(({ id, title, status }) => (
                            <li key={id}>
                                <div>
                                    <h3 className="tituloT">{title}</h3>
                                    <p>{status}</p>
                                </div>
                                <button onClick={() => deleteTech(id)}>
                                    X
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <h4>Adicone Alguma Tarefa</h4>
                )}
            </Conteudo>

            <ReactModal
                isOpen={modal}
                onRequestClose={() => fecharModal()}
                className="modal"
                overlayClassName="exterior-modal"
            >
                <div className="div-modal">
                    <p>Cadastrar Tecnologias</p>
                    <button onClick={() => fecharModal()}>X</button>
                </div>

                <FormTec onSubmit={handleSubmit(onSubmitTec)}>
                    <label htmlFor="tecnologia">Nome</label>
                    <input
                        type="text"
                        id="tecnologia"
                        placeholder="Tecnologia"
                        {...register("title")}
                    />
                    <p>{errors.title?.message}</p>

                    <label htmlFor="status">Selecionar Status</label>
                    <select {...register("status", { required: true })}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Iniciante">Avançado</option>
                    </select>
                    <p>{errors.status?.message}</p>

                    <button type="submit">Cadastrar Tecnologia</button>
                </FormTec>
            </ReactModal>
        </DivPaiDashboard>
    );
};
