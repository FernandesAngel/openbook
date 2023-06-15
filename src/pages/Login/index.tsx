import * as S from "./styles";

import { useAuth } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

const schemaLogin = yup.object({
  email: yup.string().required("Email obrigatória").email("erro email"),

  senha: yup.string().required("senha obrigatória").min(8, "deve ter no mínimo 8 caracteres"),
});

interface LoginProps {
  email: string;
  senha: string;
}

export function Login() {
  const navigate = useNavigate();
  const { signIn, authError, loading } = useAuth();
  //const isLogged = false;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: yupResolver(schemaLogin),
  });

  function handleNavigation() {
    navigate("/signup");
  }

  async function handleSignIn(data: LoginProps) {
    await signIn(data);
  }

  return (
    <S.Container>

        <S.TitleContainer>
          <S.Title>Olá,</S.Title>
          <S.Description>
            Faça seu login no openBook.
          </S.Description>
        </S.TitleContainer>
        <S.Form onSubmit={handleSubmit(handleSignIn)}>
          <h2>Login</h2>
          <Input
            variant="user"
            label="Email"
            type="text"

            error={
              (errors.email !== undefined &&
                errors.email.message !== undefined) ||
              (errors.senha !== undefined &&
                errors.senha.message !== undefined) ||
              authError
            }
            {...register("email")}
          />
          <Input
            variant="password"
            label="Senha"
            type="password"
            error={
              (errors.email !== undefined &&
                errors.email.message !== undefined) ||
              (errors.senha !== undefined &&
                errors.senha.message !== undefined) ||
              authError
            }
            {...register("senha")}
          />
          <S.ErrorMessageContainer>
            {authError && (
              <S.ErrorMessage error={true}>
                Ops, usuário ou senha inválidos. <br /> Tente novamente!
              </S.ErrorMessage>
            )}
            {errors.email ? (
              <S.ErrorMessage error={true}>
                Ops, usuário ou senha inválidos. <br /> Tente novamente!
              </S.ErrorMessage>
            ) : errors.senha ? (
              <S.ErrorMessage error={true}>
                Ops, usuário ou senha inválidos. <br /> Tente novamente!
              </S.ErrorMessage>
            ) : null}
          </S.ErrorMessageContainer>
          <S.FormButtonContainer>
            <Button loading={loading} type="submit" title="Continuar" />
          </S.FormButtonContainer>
        </S.Form>
        <S.SignUpButton onClick={handleNavigation}>
          Ainda não tem uma conta? Cadastre-se
        </S.SignUpButton>

    </S.Container>
  );
}
