import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.ice};
`;

export const SubtitleView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.brandColorPrimary};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.family.secondary};
  font-weight: 400;
  line-height: ${({ theme }) => theme.space.large};
  margin-top: ${({ theme }) => theme.space.xxl};
  margin-bottom: ${({ theme }) => theme.space.large};

  strong {
    font-weight: 600;
  }

  @media (max-width: 500px) {
    margin-top: 32px;
  }
`;

export const ContentView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
