import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white200};
  height: 100vh;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  h1{
    margin: 40px 0 0 0;
  }
`;

export const AddBookContainer = styled.form`
  width: 70%;
  padding: 40px 90px;
  margin: 0 auto;
`;

export const ErrorMessageContainer = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const ErrorMessage = styled.p`
  font-weight: 700;
  font-size: 1rem;
  line-height: 20px;
  text-align: center;
  margin-top: 35px;
  color: ${(props) => props.theme.warnText};
  max-width: 300px;
`;



