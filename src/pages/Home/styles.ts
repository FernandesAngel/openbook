import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const HeroSection = styled.section`
  display: flex;
  gap: 40px;
  width: 100%;
  padding: 60px 90px;
  background-color: ${(props) => props.theme.colors.white200};
`;
export const HeroSectionLeft = styled.div`
  width: 40%;
  h1 {
    font-size: 48px;
  }
  p {
    font-size: 16px;
  }
`;
export const HeroSectionRight = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
export const HeroImage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: flex-start;
  height: 390px;
  p {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
  img {
    width: 200px;
    height: 350px;
    object-fit: cover;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
  }
  .diferente {
    border-top-right-radius: 0%;
    border-top-left-radius: 0%;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
  }
`;
export const AllBooksContainer = styled.div`
  width: 100%;
  padding: 60px 90px;
  h1{}
`;

export const BooksContainer = styled.div`
    display: flex;
    flex-direction: row;
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
    span {
      /* width: 10%; */
    border-radius: 4px;
    padding: 15px 10px;
    color: ${(props) => props.theme.colors.white100};
    background: ${(props) => props.theme.colors.blue};
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 23px;
    margin-top: 30px;
    cursor: pointer;
    border: 0;
    }
`;


