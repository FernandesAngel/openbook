import styled, { keyframes } from "styled-components";

export function rotationBuilder() {
  const rotation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
      opacity: .9
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `;
  return rotation;
}

export const Container = styled.div`
  width: 100%;
  button {
    width: 100%;
    border-radius: 4px;
    padding: 15px 0;
    color: ${(props) => props.theme.colors.white100};
    background: ${(props) => props.theme.colors.blue};
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 23px;
    margin-top: 30px;
    cursor: pointer;
    border: 0;
  }
  .spinner {
    animation: ${rotationBuilder()} 1s linear infinite;
  }
`;
