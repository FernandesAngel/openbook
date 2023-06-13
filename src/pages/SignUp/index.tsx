import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../../components/Button";
import { SimpleInput } from "../../components/SimpleInput";

const schemaUser = yup.object({
  name: yup.string().required("Você precisa preencher seu nome completo."),
  email: yup
    .string()
    .required("O campo de email é obrigatório")
    .email("Seu email é inválido"),

  password: yup
    .string()
    .required("A senha é obrigatória"),


  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas devem ser iguais."),
});

const errorsPassword = ["1", "2", "3", "4", "5"];

interface SignUpProps {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export function SignUp() {
  const navigate = useNavigate();
  const { signUp, loading, signUpError } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpProps>({
    mode: "onChange",
    reValidateMode: "onSubmit",
    resolver: yupResolver(schemaUser),
  });


  function handleGoBack() {
    navigate("/");
  }

  async function handleSignUpSubmit(data: SignUpProps) {
    const { name, email, password } = data;

    const userData = {
      email,
      password,
    };
    const response = await signUp(userData, { name, email });
    if (response) {
      reset();
    }
  }

  return (
    <S.Container>
        <S.TitleContainer>
          <S.Title>Olá,</S.Title>
          <S.Description>
            Faça seu cadastro no OpenBook para blablabla.
          </S.Description>
        </S.TitleContainer>
        <S.Form onSubmit={handleSubmit(handleSignUpSubmit)}>
          <SimpleInput
            label="Nome Completo"
            type="text"
            {...register("name")}
          />
          <SimpleInput label="Email" type="email" {...register("email")} />
          <SimpleInput
            label="Senha"
            type="password"
            {...register("password")}
          />

          <SimpleInput
            label="Confirmar Senha"
            type="password"
            {...register("passwordConfirmation")}
          />
          <S.ErrorMessageContainer>
            {errors.name ? (
              <S.ErrorMessage>{errors.name.message}</S.ErrorMessage>
            ) : errors.email ? (
              <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
            ) : errors.password &&
              errors.password.message === "A senha é obrigatória" ? (
              <S.ErrorMessage>A senha é obrigatória</S.ErrorMessage>
            ) : errors.passwordConfirmation ? (
              <S.ErrorMessage>
                {errors.passwordConfirmation.message}
              </S.ErrorMessage>
            ) : errors.password &&
              errorsPassword.includes(errors.password.message || "") ? (
              <S.ErrorMessage>
                Verifique se a sua senha atende a todas as especificações.
              </S.ErrorMessage>
            ) : signUpError ? (
              <S.ErrorMessage>{signUpError}</S.ErrorMessage>
            ) : null}
          </S.ErrorMessageContainer>
          <Button loading={loading} type="submit" title="Cadastrar" />
        </S.Form>
        <S.GoBackButton onClick={handleGoBack}>
          Já tem uma conta? Faça seu login
        </S.GoBackButton>
    </S.Container>
  );
}
