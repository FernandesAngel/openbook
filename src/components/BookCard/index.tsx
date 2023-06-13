import * as S from "./styles";

export function BookCard() {
  return (
    <S.Container>
        <S.ContainerLeft>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwCZUZXbBFPq1KOFkJVe56-H1zS4SIe6NW04k8lpFPiOCNifZNpuVPw2q1OVUTqsoDC4o&usqp=CAU" alt="" />
        </S.ContainerLeft>
        <S.ContainerRight>
          <h2>Título</h2>
          <h4>Autor</h4>
          <p>Editora</p>
          <p>Data!</p>
          <button>Adicionar à minha biblioteca</button>
        </S.ContainerRight>
    </S.Container>
  );
}
