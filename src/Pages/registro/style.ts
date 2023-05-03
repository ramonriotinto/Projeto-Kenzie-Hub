import styled from "styled-components";

export const DivPaiRegistro = styled.div`
  width: 100%;

  background-color: var(--color-grey-1);

  padding-top: 15px;
  padding-bottom: 46px;

  .divFilha {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 90%;

    margin: 0 auto;

    h2 {
      color: var(--color-primary);
    }
    .linkRegistro {
      color: white;
      background-color: var(--color-grey-2);

      width: 80px;
      height: 32px;

      text-decoration: none;

      border-radius: 5px;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  @media screen and (min-width: 720px) {
    .divFilha {
      width: 400px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 90%;

  margin: 0 auto;

  background-color: var(--color-grey-2);
  color: white;

  border-radius: 10px;

  padding-bottom: 20px;

  div {
    margin-bottom: 30px;

    span {
      color: var(--color-grey-4);
    }
  }

  label {
    margin-bottom: 15px;
    text-align: start;
    margin-left: 18px;
  }

  input {
    width: 90%;
    height: 38px;

    margin: 0 auto;

    margin-bottom: 0;

    background-color: var(--color-grey-3);
    color: var(--color-grey-5);

    border: none;
    border-radius: 5px;
  }

  select {
    width: 90%;
    height: 38px;

    margin: 0 auto;

    margin-bottom: 0;

    background-color: var(--color-grey-3);

    border: none;
    border-radius: 5px;
  }

  button {
    width: 90%;
    height: 38px;

    margin: 0 auto;

    border: none;
    border-radius: 5px;

    background-color: var(--color-primary-Negative);
    color: var(--color-grey-5);

    cursor: pointer;
  }
  button:hover {
    background-color: var(--color-negative);
  }

  p {
    color: var(--color-negative);
  }

  @media screen and (min-width: 720px) {
    width: 400px;
  }
`;
