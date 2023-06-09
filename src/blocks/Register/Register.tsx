import { Row, Top, Container } from "./styles";
import { TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Register: React.FC = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    lastName: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
    confirmPassword: yup.string().required("Campo obrigatório"),
  });

  const defaultValues = {
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const { handleSubmit, control, formState, getValues, setValue } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: any) => {
    console.log("values", values);
  };

  return (
    <Container>
      <Top>
        <img src="/munera-logo.png" alt="Logo" />
        <h1>Sua conta para tudo na Munera</h1>
      </Top>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <button type="submit">Cadastre-se</button>
      </form>
    </Container>
  );
};

export default Register;
