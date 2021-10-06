import styled from "styled-components";

export const HeadSection = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Icon = styled.svg`
  width: 64px;
  height: 64px;
`;

export const HeadTextSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-left: 16px;
  height: 64px;
  justify-content: space-evenly;

  h2 {
    margin: 0;
    font-size: 24px;
    font-weight: 500;
    font-family: ${({ theme }) => theme.fonts.family.primary};
    color: ${({ theme }) => theme.colors.blueGray["900"]};
  }

  h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    font-family: ${({ theme }) => theme.fonts.family.secondary};
    color: ${({ theme }) => theme.colors.blueGray["400"]};
  }

  @media (max-width: 500px) {
    h2 {
      font-size: 20px;
    }
    h3 {
      font-size: 14px;
    }
  }
`;
