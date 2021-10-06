import styled from "styled-components";

export const MonthlyAmountInfo = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.space.large};
  border-radius: ${({ theme }) => theme.space.small};
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.blueGray["50"]};
`;

export const MonthlyAmountValues = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.space.xl};

  h2 {
    margin: 0;
    font-size: 20px;
    font-weight: 400;
    font-family: ${({ theme }) => theme.fonts.family.secondary};
    color: ${({ theme }) => theme.colors.blueGray["900"]};
  }

  strong {
    flex: 1;
    margin: 0;
    margin-left: ${({ theme }) => theme.space.small};
    font-size: ${({ theme }) => theme.fonts.size.xl};
    font-weight: 500;
    text-align: end;
    font-family: ${({ theme }) => theme.fonts.family.primary};
    color: ${({ theme }) => theme.colors.brandColorSecondary};

    white-space: nowrap;
    max-width: 250px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 500px) {
    padding: ${({ theme }) => theme.space.large};

    h2 {
      font-size: 18px;
    }
    strong {
      font-size: ${({ theme }) => theme.fonts.size.large};
    }
  }
`;

export const MonthlyAmountDescription = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.space.large} ${({ theme }) => theme.space.xl};
  background-color: ${({ theme }) => theme.colors.blueGray["10"]};
  font-family: ${({ theme }) => theme.fonts.family.secondary};
  font-size: ${({ theme }) => theme.fonts.size.xs};
  line-height: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.blueGray["900"]};

  strong {
    font-weight: 600;
  }
  @media (max-width: 500px) {
    text-align: center;
  }
`;
