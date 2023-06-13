import { Top, Container } from "./styles";
import { TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputMask from "react-input-mask";
import { useState } from "react";
import { useRouter } from "next/router";

const RegisterCompany: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const schema = yup.object().shape({
    cnpj: yup.string().required("Campo obrigatório"),
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
    confirmPassword: yup
      .string()
      .required("Campo obrigatório")
      //@ts-ignore
      .oneOf([yup.ref("password"), null], "As senhas devem coincidir"),
  });

  const defaultValues = {
    cnpj: "",
    name: "",
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
      cnpj: values.cnpj.replace(/[^\d]/g, ""),
      email: values.email,
      nome: values.name,
      senha: values.password,
    };

    fetch(process.env.NEXT_PUBLIC_API_AUTH + "/empresas", {
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
        router.push("/login-empresa");
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
        <h1>
          Sua empresa <br />
          na vitrine
        </h1>
      </Top>
      <form onSubmit={handleSubmit(onSubmit)}>
        {loginError && <p>{loginError}</p>}
        <Controller
          control={control}
          name="cnpj"
          render={({ field }) => (
            <InputMask mask={"99.999.999/9999-99"} maskChar={null} {...field}>
              {/* @ts-ignore */}
              {(inputProps: any) => (
                <TextField
                  {...inputProps}
                  label="CNPJ*"
                  error={!!formState.errors.cnpj}
                  helperText={formState?.errors?.cnpj?.message}
                />
              )}
            </InputMask>
          )}
        />
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <TextField
              {...field}
              label="Razão Social*"
              error={!!formState.errors.name}
              helperText={formState?.errors?.name?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextField
              {...field}
              label="E-mail*"
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
              label="Senha*"
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
              label="Confirmar senha*"
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

export default RegisterCompany;
