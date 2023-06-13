import * as S from "./styles";

export function HomeHeader() {
  return (
    <S.Container>
      <S.LogoContainer>
        <h1>openbook</h1>
      </S.LogoContainer>
      <S.MenuContainer>
        <a href="/home">Home</a>
        <a href="/minha-biblioteca">Minha biblioteca</a>
      </S.MenuContainer>
      <S.ActionContainer>
        <a href="/">Sair</a>
      </S.ActionContainer>
    </S.Container>
  );
}
