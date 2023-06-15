
import { Button } from "../../components/Button";
import { HomeHeader } from "../../components/HomeHeader";
import { SimpleInput } from "../../components/SimpleInput";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as S from "./styles";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const schemaBook = yup.object({

  nome: yup.string().required("Você precisa preencher o nome do livro."),
  autor: yup
    .string()
    .required("O campo de autor é obrigatório."),
  editora: yup
    .string()
    .required("A editora é obrigatória."),
    foto: yup
    .string()
    .required("A URL da foto de capa é obrigatória."),
    isbn: yup
    .number().min(8, "O isbn precisa de pelo menos 8 caracteres.").required("O ISBN precisa ser um número")
});

interface BookProps {
  nome: string;
  autor: string;
  editora: string;
  foto: string;
  isbn?: string;
}


export function MyLibrary() {
  const navigate = useNavigate();
  const [addBookError, setAddBookError] = useState("")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookProps>({
    mode: "onChange",
    reValidateMode: "onSubmit",
    resolver: yupResolver(schemaBook),
  });

  async function handleBookSubmit(data: BookProps) {
    const { nome, autor, editora, isbn, foto } = data;

    const bookData = {
      nome, autor, editora, isbn, foto
    };
    const response = await api.post('Livro/cadastrar', bookData);
    if (response) {
      setAddBookError("")
      reset();
      navigate("/");
    } else {
      setAddBookError("Ocorreu um erro ao cadastrar o livro. Verifique as informações e tente novamente.")
    }
  }

  return (
    <S.Container>
      <HomeHeader />
      <S.Content>
        <h1>Cadastrar Livro</h1>
        <S.AddBookContainer onSubmit={handleSubmit(handleBookSubmit)}>
        <SimpleInput
            label="Nome"
            type="text"
            {...register("nome")}
          />
          <SimpleInput
          label="Autor"
          type="text"
          {...register("autor")}
          />
          <SimpleInput
            label="Editora"
            type="text"
            {...register("editora")}
          />
          <SimpleInput
            label="Capa"
            type="text"
            {...register("foto")}
          />

          <SimpleInput
            label="ISBN"
            type="number"
            {...register("isbn")}
          />

          <S.ErrorMessageContainer>
            {errors.nome ? (
              <S.ErrorMessage>{errors.nome.message}</S.ErrorMessage>
            ) : errors.autor ? (
              <S.ErrorMessage>{errors.autor.message}</S.ErrorMessage>
            ) : errors.editora  ? (
              <S.ErrorMessage>{errors.editora.message}</S.ErrorMessage>
            ) : errors.isbn ? (
              <S.ErrorMessage>
                {errors.isbn.message}
              </S.ErrorMessage>
            ) : errors.foto ? (
              <S.ErrorMessage>
                {errors.foto.message}
              </S.ErrorMessage>
            ) :  addBookError ? (
              <S.ErrorMessage>{addBookError}</S.ErrorMessage>
            ) : <S.ErrorMessage></S.ErrorMessage>}
          </S.ErrorMessageContainer>

          <Button title="Adicionar livro" loading={false} />
        </S.AddBookContainer>
      </S.Content>
      {/* <Footer /> */}
    </S.Container>
  );
}
