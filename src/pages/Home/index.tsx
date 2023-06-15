import { useCallback, useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { HomeHeader } from "../../components/HomeHeader";
import { MyBookCard } from "../../components/MyBookCard";
import * as S from "./styles";
import { api } from "../../services/api";
import { Link, NavLink } from "react-router-dom";

interface BookProps {
  id: string;
  nome: string;
  autor: string;
  editora: string;
  foto: string;
}

export function Home() {
  const [books, setBooks] = useState<BookProps[]>([]);

  const getLivros = useCallback(async () => {
    try {
      const response = await api.get("/Livro")
      setBooks(response.data);
    } catch (error) {
      alert("Erro ao ler livros")
    }
  }, [])
  const deleteLivro = useCallback(async (id: string) => {
    try {

        await api.delete(`/Livro/${id}`);
        setBooks(prevState => prevState.filter(book => book.id !== id));
    } catch (error) {
      alert("Erro ao deletar livro")
    }
  }, [])

  useEffect(() => {
    getLivros()
  }, [getLivros]);


  return (
    <S.Container>
      <HomeHeader />
      <S.Content>
        <S.HeroSection>
          <S.HeroSectionLeft>
            <h1>GERENCIE SEUS LIVROS COM OPENBOOK</h1>
            <p>Organizar suas leituras com facilidade é uma tarefa simplificada aqui. Com essa ferramenta, você terá todas as funcionalidades necessárias para tornar sua experiência de leitura organizada e prazerosa, facilitando o acesso e o acompanhamento das obras que mais lhe interessam.</p>
          </S.HeroSectionLeft>
          <S.HeroSectionRight>
            <S.HeroImage>
              <img src="https://img.skoob.com.br/D-gzC9cvXqTiH67dA4kRKxpVKhA=/600x0/center/top/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/11651761/AS_CRONICAS_DAS_SOMBRAS_160200930411651761SK1602009305B.jpg" alt="" />
              <p><b>As crônicas da sombra</b> Frances Hardinge</p>
            </S.HeroImage>
            <S.HeroImage >
              <img className="diferente" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcStmLuFQX_UAlyRtl1sAA-vJCdJLSBi7j9dViEK3gr6H_-hXHDS" alt="" />
              <p><b>Harry Potter e o cálice de fogo</b> J. K. Rowling</p>
            </S.HeroImage>
            <S.HeroImage>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQsj0jLOLaiooTHhu39Yo_5O2qn3Jyza0pfg&usqp=CAU" alt="" />
              <p><b>A fúria dos reis</b> George R. R. Martin </p>
            </S.HeroImage>
          </S.HeroSectionRight>
        </S.HeroSection>
        <S.AllBooksContainer>

          <S.SearchContainer>
          <h1>Minha biblioteca</h1>
          <NavLink to={"/books/cadastrar-livro"}>
            <span>Adicionar Livro</span>
          </NavLink>

          </S.SearchContainer>
          <S.BooksContainer>
            {books && books.map((book: BookProps) => {
              return (
                <MyBookCard key={book.id} removeBook={deleteLivro} id={book.id} autor={book.autor} foto={book.foto} nome={book.nome} editora={book.editora} />
              )
            })}
          </S.BooksContainer>
        </S.AllBooksContainer>
      </S.Content>
      {/* <Footer /> */}
    </S.Container>
  );
}
