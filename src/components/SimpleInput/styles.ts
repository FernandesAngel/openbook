import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.blue};
  padding: 5px;
  border-radius: 4px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 25px;

  input {
    border: 0;
    background-color: transparent;
    padding: 10px 15px;
    width: 100%;
    color: ${(props) => props.theme.grey900};
    font-size: 1rem;
    outline: none;
    :-webkit-autofill {
      background-color: ${(props) => props.theme.white200};
      -webkit-text-fill-color: ${(props) => props.theme.grey900};
      transition: background-color 5000s ease-in-out 0s;
    }
  }
`;
