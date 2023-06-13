import { BookCard } from "../../components/BookCard";
import { Button } from "../../components/Button";
import { HomeHeader } from "../../components/HomeHeader";
import { MyBookCard } from "../../components/MyBookCard";
import * as S from "./styles";

export function MyLibrary() {
  return (
    <S.Container>
      <HomeHeader />
      <S.Content>
        <S.AllBooksContainer>
          <h1>Biblioteca de NOME</h1>
          <S.SearchContainer>
            <input type="search" />
            <Button title="Buscar" loading={false}></Button>
            <Button title="Adicionar Livro" loading={false}></Button>
          </S.SearchContainer>
          <S.BooksContainer>
            <MyBookCard />
            <MyBookCard />
            <MyBookCard />
            <MyBookCard />
          </S.BooksContainer>
        </S.AllBooksContainer>
      </S.Content>
      {/* <Footer /> */}
    </S.Container>
  );
}
