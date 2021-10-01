import styled from "styled-components";

export const Container = styled.div`
  top: 0;
  position: sticky;
  display: flex;
  flex-direction: row;
  padding: ${({ theme }) => theme.space.large}
    ${({ theme }) => theme.space.xxxl};
  justify-content: flex-start;
  align-items: center;
  padding-left: ${({ theme }) => theme.space.xxxl};
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: 500px) {
    padding: ${({ theme }) => theme.space.medium};
  }
`;
