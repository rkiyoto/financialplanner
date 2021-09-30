import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
  justify-content: flex-start;
  align-items: center;
  padding-left: ${({theme}) => theme.space.xxxl};
  background-color: ${({ theme }) => theme.colors.white};
  
  @media (max-width: 500px)
  {
    height: ${({theme}) => theme.space.xxxl};
    padding-left: ${({theme}) => theme.space.medium};
  }
`;
