import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";

const LoginLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  & h1 {
    margin: 2rem 0;
  }
`;

function Login() {
  return (
    <LoginLayout>
      <img src="/logo_black.svg" alt="Logo of the company" />
      <Heading>Log into your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
