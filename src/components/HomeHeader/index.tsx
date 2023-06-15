import { useAuth } from "../../contexts/auth";
import { Button } from "../Button";
import * as S from "./styles";

export function HomeHeader() {
  const {signOut} = useAuth()
  return (
    <S.Container>
      <S.LogoContainer>
        <h1>openbook</h1>
      </S.LogoContainer>
      <S.MenuContainer>
        {/* <a href="/home">Home</a> */}
        {/* <a href="/perfil">Perfil</a> */}
      </S.MenuContainer>
      <S.ActionContainer>
        <Button title="Sair" loading={false} onClick={() => signOut()}/>
      </S.ActionContainer>
    </S.Container>
  );
}
