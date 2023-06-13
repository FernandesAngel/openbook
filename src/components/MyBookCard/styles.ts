import styled from "styled-components";
export const Container = styled.div`
  width: 49%;
  height: 250px;
  background-color: ${(props) => props.theme.colors.grey800};
  display: flex;
  flex-direction: row;
  margin-top: 40px;
`;

export const ContainerLeft = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const ContainerRight = styled.div`
  width: 80%;
  height: 250px;
  color: ${(props) => props.theme.colors.white200};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 12px 16px;
  h2{
    width: 100%;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 21px;
  }
  h4{
    width: 100%;
    font-weight: 600;
    font-size: 17px;
    margin-bottom: 16px;
  }
  p{
    width: 100%;
    font-size: 14px;
  }
  button{
    background: transparent;
    border: 1px solid white;
    color: white;
    padding: 6px 10px;
    transition: all 0.2s ease-in-out;
    align-self: flex-start;
    margin-top: 16px;
  }
  button:hover{
    background: ${(props) => props.theme.colors.white100};
    color: ${(props) => props.theme.colors.green};
  }
`;

export const ContainerRightSecond = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 30px 16px;
  button{
    color: ${(props) => props.theme.colors.white200};
    background: transparent;
    border: 0;
    svg{
      color: ${(props) => props.theme.colors.white200};

    }
  }


`;
