import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  padding-top: 20vh;
  align-items: center;
  flex-direction: column;
`;

export const AuthHeading = styled.h2`
  font-weight: 700;
`;

export const AuthForm = styled.form`
  display: flex;
  width: 400px;
  padding: 30px;
  flex-direction: column;
  align-content: center;
  box-shadow: 0px 0px 2px 0px grey;
  border-radius: 2px;
  justify-content: space-evenly;
`;

export const InputContainer = styled.div`
  margin: 2px;
`;

export const FormText = styled.div`
  font-weight: 400;
  align-self: flex-start;
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 5px;
  margin-bottom: 20px;
  box-sizing: border-box;
`;
export const FormSubmit = styled.button`
  padding: 5px;
  margin-bottom: 10px;
`;

export const FormMsg = styled.div`
  margin-bottom: 10px;
  color: red;
  height: 1rem;
  padding: 3px;
  text-align: center;
`;

export const SignUpText = styled.div`
  padding: 5px;
  margin-top: 10px;
`;
