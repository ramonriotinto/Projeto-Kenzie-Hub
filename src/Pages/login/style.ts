import styled from "styled-components";

export const DivPaiLogin = styled.div`
  width: 100%;
  height: 100vh;

  background-color: var(--color-grey-1);
  color: var(--color-grey-5);
  padding-top: 15px;
  padding-bottom: 46px;

  .contH2 {
    color: var(--color-primary);
  }
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;

  width: 90%;

  margin: 0 auto;

  text-align: start;

  background-color: var(--color-grey-2);

  padding-bottom: 33px;

  border-radius: 10px;

  .contH3 {
    text-align: center;
  }

  label {
    margin-bottom: 15px;
    margin-left: 12px;

    text-align: start;
  }

  input {
    width: 90%;
    height: 38px;

    margin: 0 auto;

    margin-bottom: 0;

    background-color: var(--color-grey-3);
    color: var(--color-grey-5);

    border: solid 1px var(--color-grey-5);
    border-radius: 5px;
  }

  button {
    width: 90%;
    height: 38px;

    margin: 0 auto;

    border: none;
    border-radius: 5px;

    background-color: var(--color-primary);
    color: var(--color-grey-5);

    font-weight: 600;
    cursor: pointer;
  }
  button:hover {
    background-color: var(--color-primary-Negative);
  }

  p {
    color: var(--color-negative);
  }

  .contCadastro {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 30px;

    span {
      font-size: 13px;
      font-weight: 500;

      color: var(--color-grey-4);

      margin-bottom: 15px;
    }

    .linkResgt {
      width: 90%;
      height: 38px;

      display: flex;
      align-items: center;
      justify-content: center;

      text-decoration: none;
      font-weight: 500;

      color: var(--color-grey-5);
      background-color: var(--color-grey-4);

      border: none;
      border-radius: 5px;

      cursor: pointer;
    }
    .linkResgt:hover {
      background-color: var(--color-grey-3);
    }
  }

  @media screen and (min-width: 720px) {
    width: 400px;
  }
`;
