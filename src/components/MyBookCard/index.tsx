import { api } from "../../services/api";
import * as S from "./styles";
import { BsFillTrashFill } from "react-icons/bs";

interface BookProps {
  id: string;
  nome: string;
  autor: string;
  editora: string;
  foto: string;

  removeBook: (id: string) => void;
}
export function MyBookCard({autor, editora, id, foto, nome, removeBook}: BookProps) {



  return (
    <S.Container>
        <S.ContainerLeft>
          <img src={foto} alt="" />
        </S.ContainerLeft>
        <S.ContainerRight>
          <h2>{nome}</h2>
          <h4>{autor}</h4>
          <p>Editora: {editora}</p>
        </S.ContainerRight>
        <S.ContainerRightSecond>
          <button onClick={() => removeBook(id)}>
            <BsFillTrashFill size={28} />
          </button>
        </S.ContainerRightSecond>
    </S.Container>
  );
}
