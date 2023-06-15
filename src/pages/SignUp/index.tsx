import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../../components/Button";
import { SimpleInput } from "../../components/SimpleInput";

const schemaUser = yup.object({
  nome: yup.string().required("Você precisa preencher seu nome completo."),
  usuario: yup
    .string()
    .required("O campo de email é obrigatório")
    .email("Seu email é inválido"),

  senha: yup
    .string()
    .required("A senha é obrigatória"),


    passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('senha'), null], 'A senha e a repetição não conferem'),
});

const errorsPassword = ["1", "2", "3", "4", "5"];

interface SignUpProps {
  nome: string;
  usuario: string;
  senha: string;
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
    const { nome, usuario, senha } = data;

    const userData = {
      usuario,
      senha,
      nome
    };
    const response = await signUp(userData);
    if (response) {
      reset();
      navigate("/");
    }
  }
  return (
    <S.Container>
        <S.TitleContainer>
          <S.Title>Olá,</S.Title>
          <S.Description>
            Faça seu cadastro no OpenBook.
          </S.Description>
        </S.TitleContainer>
        <S.Form onSubmit={handleSubmit(handleSignUpSubmit)}>
          <SimpleInput
            label="Nome Completo"
            type="text"
            {...register("nome")}
          />
          <SimpleInput label="Email" type="email" {...register("usuario")} />
          <SimpleInput
            label="Senha"
            type="password"
            {...register("senha")}
          />

          <SimpleInput
            label="Confirmar Senha"
            type="password"
            {...register("passwordConfirmation")}
          />
          <S.ErrorMessageContainer>
            {errors.nome ? (
              <S.ErrorMessage>{errors.nome.message}</S.ErrorMessage>
            ) : errors.usuario ? (
              <S.ErrorMessage>{errors.usuario.message}</S.ErrorMessage>
            ) : errors.senha &&
              errors.senha.message === "A senha é obrigatória" ? (
              <S.ErrorMessage>A senha é obrigatória</S.ErrorMessage>
            ) : errors.passwordConfirmation ? (
              <S.ErrorMessage>
                {errors.passwordConfirmation.message}
              </S.ErrorMessage>
            ) : errors.senha &&
              errorsPassword.includes(errors.senha.message || "") ? (
              <S.ErrorMessage>
                Verifique se a sua senha atende a todas as especificações.
              </S.ErrorMessage>
            ) : signUpError ? (
              <S.ErrorMessage>{signUpError}</S.ErrorMessage>
            ) : <S.ErrorMessage>vida linda</S.ErrorMessage>}
          </S.ErrorMessageContainer>
          <Button loading={loading} type="submit" title="Cadastrar" />
        </S.Form>
        <S.GoBackButton onClick={handleGoBack}>
          Já tem uma conta? Faça seu login
        </S.GoBackButton>
    </S.Container>
  );
}
