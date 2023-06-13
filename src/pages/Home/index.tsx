import { BookCard } from "../../components/BookCard";
import { Button } from "../../components/Button";
import { HomeHeader } from "../../components/HomeHeader";
import * as S from "./styles";

export function Home() {
  return (
    <S.Container>
      <HomeHeader />
      <S.Content>
        <S.HeroSection>
          <S.HeroSectionLeft>
            <h1>BLA BLA OPENBOOK</h1>
            <p>descrição uau</p>
          </S.HeroSectionLeft>
          <S.HeroSectionRight>
            <S.HeroImage>
              <img src="" alt="" />
              <p><b>Título teste</b> aaaa autor</p>
            </S.HeroImage>
            <S.HeroImage >
              <img className="diferente" src="" alt="" />
              <p></p>
            </S.HeroImage>
            <S.HeroImage>
              <img src="" alt="" />
              <p></p>
            </S.HeroImage>
          </S.HeroSectionRight>
        </S.HeroSection>
        <S.AllBooksContainer>
          <h1>Todos os livros</h1>
          <S.SearchContainer>
            <input type="search" />
            <Button title="Buscar" loading={false}></Button>
            <Button title="Adicionar Livro" loading={false}></Button>
          </S.SearchContainer>
          <S.BooksContainer>
            <BookCard ></BookCard>
            <BookCard ></BookCard>
            <BookCard ></BookCard>
          </S.BooksContainer>
        </S.AllBooksContainer>
      </S.Content>
      {/* <Footer /> */}
    </S.Container>
  );
}
