import { Row, Top, Container } from "./styles";
import { TextField } from "../../components";
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

  return (
    <Container register>
      <Top>
        <img src="/munera-logo.png" alt="Logo" />
        <h1>Sua conta para tudo na Munera</h1>
      </Top>
      <form>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <TextField
              {...field}
              placeholder="Nome"
              error={formState.errors.name ? formState.errors.name.message : ""}
            />
          )}
        />
        <Controller
          control={control}
          name="lastName"
          render={({ field }) => (
            <TextField
              {...field}
              placeholder="Sobrenome"
              error={
                formState.errors.lastName
                  ? formState.errors.lastName.message
                  : ""
              }
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextField
              {...field}
              placeholder="E-mail"
              type="email"
              error={
                formState.errors.email ? formState.errors.email.message : ""
              }
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <TextField
              {...field}
              placeholder="Senha"
              type="password"
              error={
                formState.errors.password
                  ? formState.errors.password.message
                  : ""
              }
            />
          )}
        />
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field }) => (
            <TextField
              {...field}
              placeholder="Confirmar senha"
              type="password"
              error={
                formState.errors.confirmPassword
                  ? formState.errors.confirmPassword.message
                  : ""
              }
            />
          )}
        />
        <button>Cadastre-se</button>
      </form>
    </Container>
  );
};

export default Register;
