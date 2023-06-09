import { Top, Container } from "./styles";
import { TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useRouter } from "next/router";

const Register: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    lastName: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
    confirmPassword: yup
      .string()
      .required("Campo obrigatório")
      //@ts-ignore
      .oneOf([yup.ref("password"), null], "As senhas devem coincidir"),
  });

  const defaultValues = {
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const { handleSubmit, control, formState } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (values: any) => {
    setIsLoading(true);
    const payload = {
      nome: `${values.name} ${values.lastName}`,
      email: values.email,
      senha: values.password,
    };

    fetch(process.env.NEXT_PUBLIC_API_AUTH + "/clientes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (res.ok) {
          return res;
        } else {
          return setLoginError("Algo deu errado, tente novamente!");
        }
      })
      .then(() => {
        router.push("/login");
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
          name="name"
          render={({ field }) => (
            <TextField
              {...field}
              label="Nome"
              error={!!formState.errors.name}
              helperText={formState?.errors?.name?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="lastName"
          render={({ field }) => (
            <TextField
              {...field}
              label="Sobrenome"
              error={!!formState.errors.lastName}
              helperText={formState?.errors?.lastName?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextField
              {...field}
              label="E-mail"
              type="email"
              error={!!formState.errors.email}
              helperText={formState?.errors?.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <TextField
              {...field}
              label="Senha"
              type="password"
              error={!!formState.errors.password}
              helperText={formState?.errors?.password?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field }) => (
            <TextField
              {...field}
              label="Confirmar senha"
              type="password"
              error={!!formState.errors.confirmPassword}
              helperText={formState?.errors?.confirmPassword?.message}
            />
          )}
        />
        <button
          type="submit"
          disabled={!formState.isValid || formState.isSubmitting}
        >
          {isLoading ? "Processando..." : "Cadastre-se"}
        </button>
      </form>
    </Container>
  );
};

export default Register;
