import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white200};
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const AllBooksContainer = styled.div`
  width: 100%;
  padding: 60px 90px;
  h1{}
`;

export const BooksContainer = styled.div`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
`;
export const SearchContainer = styled.form`
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: space-between;
    align-items: baseline;
    margin: 20px 0;
    input{
      width: 70%;
      padding: 8px;
      height: 50px;
    }
    div{
      width: 13%;
    }
    button{
      width: 100%;
    }
`;


