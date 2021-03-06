import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.blueGray["50"]};
  border-radius: ${({ theme }) => theme.space.xs};
  min-width: 200px;
  height: ${({ theme }) => theme.space.xxxl};
`;

export const ArrowButton = styled.button`
  display: flex;
  height: 100%;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0 20px;
  transition: all 0.2s;

  :hover {
    background-color: ${({ theme }) => theme.colors.blueGray["50"]};
  }

  :disabled {
    background-color: ${({ theme }) => theme.colors.blueGray["50"]};
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const DateView = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.family.secondary};
  font-size: ${({ theme }) => theme.fonts.size.medium};
  height: 54px;

  strong {
    color: ${({ theme }) => theme.colors.blueGray["900"]};
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.space.xs};
  }

  p {
    color: ${({ theme }) => theme.colors.blueGray["300"]};
    font-weight: 400;
  }
  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.fonts.size.small};
  }
`;
