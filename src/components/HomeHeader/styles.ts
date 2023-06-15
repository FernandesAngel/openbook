import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 25px 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white200};
`;
export const LogoContainer = styled.div``;
export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 10px;
`;
export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 60px;
`;
