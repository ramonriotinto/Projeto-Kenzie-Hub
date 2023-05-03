import styled from "styled-components";

export const DivPaiDashboard = styled.div`
  width: 100%;
  height: 100vh;

  background-color: var(--color-grey-1);

  @media screen and (min-width: 1440px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const Navegacao = styled.nav`
  width: 100%;
  div {
    width: 90%;

    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      color: var(--color-primary);
    }

    button {
      width: 55px;
      height: 32px;

      color: var(--color-grey-5);
      background-color: var(--color-grey-2);

      border: none;
      border-radius: 5px;

      font-weight: 600;

      cursor: pointer;
    }
  }
  @media screen and (min-width: 1024px) {
    div {
      width: 70%;
    }
  }
`;

export const Header = styled.header`
  width: 100;
  div {
    width: 90%;

    margin: 0 auto;
    text-align: start;

    h2 {
      color: var(--color-grey-5);
    }
    p {
      color: var(--color-grey-4);
    }

    @media screen and (min-width: 720px) {
      display: flex;
      justify-content: space-between;
    }
  }

  @media screen and (min-width: 1024px) {
    div {
      width: 70%;
    }
  }
`;

export const Conteudo = styled.main`
  width: 100%;

  div {
    width: 90%;

    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: var(--color-grey-5);

    button {
      width: 33px;
      height: 33px;

      font-size: 22px;

      background-color: var(--color-grey-2);
      color: var(--color-grey-5);

      border: none;
      border-radius: 5px;

      cursor: pointer;
    }
  }

  h4 {
    margin-top: 60px;

    color: var(--color-grey-5);

    font-size: 20px;
  }
  ul {
    background-color: var(--color-grey-2);

    list-style: none;

    width: 90%;
    height: 400px;

    overflow-y: auto;

    padding: 0;
    margin: 0 auto;

    border: none;
    border-radius: 5px;

    li {
      width: 85%;

      list-style: none;

      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 15px;

      margin: 20px auto;
      padding: 10px;

      background-color: var(--color-grey-1);

      border: none;
      border-radius: 10px;

      div {
        margin: 0;
        color: var(--color-grey-4);
        display: flex;
        justify-content: space-between;
        .tituloT {
          color: var(--color-grey-5);
        }
      }
      button {
      }
    }
  }

  @media screen and (min-width: 1024px) {
    width: 80%;

    margin: 0 auto;
  }
`;

export const FormTec = styled.form`
  width: 295px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  background-color: var(--color-grey-2);

  padding: 20px 20px 25px 20px;

  border-radius: 5px;

  label {
    color: var(--color-grey-5);
  }
  input {
    height: 35px;
    border-radius: 5px;

    background-color: var(--color-grey-3);
    color: var(--color-grey-4);
    border: solid 2px var(--color-grey-4);
  }
  select {
    height: 35px;
    border-radius: 5px;

    background-color: var(--color-grey-3);
    color: var(--color-grey-4);
    border: solid 2px var(--color-grey-4);
  }

  button {
    height: 35px;
    border-radius: 5px;
    border: none;

    background-color: var(--color-primary);
    color: var(--color-grey-5);

    cursor: pointer;
  }
`;
