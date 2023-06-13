import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 40px auto;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.white200};
  padding: 30px;
  border-radius: 10px;
`;
export const TitleContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;
export const ErrorMessageContainer = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ErrorProps {
  error: boolean;
}
export const ErrorMessage = styled.p<ErrorProps>`
  font-weight: 700;
  font-size: 1rem;
  line-height: 20px;
  text-align: center;
  display: ${(props) => (props.error ? "initial" : "none")};
  color: ${(props) => props.theme.colors.warnText};
`;
export const SignUpButton = styled.a`
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 20px;
  text-align: center;
  color: ${(props) => props.theme.secondary};
  margin-top: 10px;
  cursor: pointer;
  width: 100%;
  text-align: center;

`;
export const Form = styled.form`
  width: 400px;
  margin-top: 20px;

  h2 {
    font-weight: 400;
    font-size: 1.875rem;
    line-height: 38px;
    margin-bottom: 32px;
    color: ${(props) => props.theme.colors.blue};
  }
`;

export const FormButtonContainer = styled.div`
  width: 100%;
`;
export const Title = styled.h1`
  font-weight: 400;
  font-size: 3.75rem;
  line-height: 76px;
`;
export const Description = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 20px;
`;

