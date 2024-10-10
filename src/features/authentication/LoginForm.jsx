import MiniSpinner from "../../ui/MiniSpinner";
import { useState } from "react";
import { useLogin } from "./useLogin";
import FormRowVertical from "../../ui/FormRowVertical";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

function LoginForm() {
  const [email, setEmail] = useState("mohamed73@gmail.com");
  const [password, setPassword] = useState("123456789");
  const { login, isLogging } = useLogin();
  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }
  return (
    <Form type="login" onSubmit={handleSubmit} className="w-full ">
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLogging}
        />
      </FormRowVertical>

      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLogging}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="small" disabled={isLogging}>
          {!isLogging ? "Log in" : <MiniSpinner />}
        </Button>
      </FormRowVertical>
      {/* {isLogging && <MiniSpinner />} */}
    </Form>
  );
}

export default LoginForm;
