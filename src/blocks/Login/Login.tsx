import { Container } from "./styles";
import { TextField } from "@mui/material";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Top } from "../Register/styles";
import jwtDecode from "jwt-decode";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Login: React.FC = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório"),
    senha: yup.string().required("Campo obrigatório"),
  });

  const defaultValues = {
    email: "",
    senha: "",
  };

  const { handleSubmit, control, formState } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: any) => {
    setIsLoading(true);

    fetch(process.env.NEXT_PUBLIC_API_AUTH + "/login/cliente", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          if (res.status === 401)
            return setLoginError("E-mail incorreto ou senha incorreta.");
        }
      })
      .then((response) => {
        const decodedJwt = jwtDecode(response.jwt) as {
          [key: string]: any;
        };
        if (localStorage.getItem("id-company"))
          localStorage.removeItem("id-company");
        localStorage.setItem("id-user", decodedJwt.id);
        router.push("/");
      })
      .catch((e) => {
        console.log("e", e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Container>
      <Top>
        <img src="/munera-logo.png" alt="Logo" loading="lazy" />
        <h1>Sua conta para tudo na Munera</h1>
      </Top>
      <form onSubmit={handleSubmit(onSubmit)}>
        {loginError && <p>{loginError}</p>}
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextField
              {...field}
              label="E-mail"
              type="email"
              error={!!formState.errors.senha}
              helperText={formState?.errors?.senha?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="senha"
          render={({ field }) => (
            <TextField
              {...field}
              label="Senha"
              type="password"
              error={!!formState.errors.senha}
              helperText={formState?.errors?.senha?.message}
            />
          )}
        />
        <button
          type="submit"
          disabled={!formState.isValid || formState.isSubmitting}
        >
          {isLoading ? "Processando..." : "Entrar"}
        </button>
      </form>
      <div className="actions">
        <Link href="/login-empresa">Sou empresa</Link>
        <p>
          Não está registrado?
          <Link href="/cadastro"> Junte-se a nós.</Link>
        </p>
      </div>
    </Container>
  );
};

export default Login;
