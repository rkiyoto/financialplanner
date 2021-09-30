import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;

  background-color: ${({theme}) => theme.colors.ice}
`;

export const SubtitleView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.brandColorPrimary};
  font-size: 20px;
  font-weight: 400;
  line-height: ${({theme}) => theme.space.large};
  margin-top: ${({theme}) => theme.space.xxl};
  margin-bottom: ${({ theme }) => theme.space.large};
    
  @media (max-width: 500px)
  {
  margin-top: 32px;
  }
`;

export const ContentView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

