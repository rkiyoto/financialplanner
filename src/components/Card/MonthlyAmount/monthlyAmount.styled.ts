import styled from "styled-components";

export const MonthlyAmountInfo = styled.div`
  display: flex;
  margin-top: 24px;
  border-radius: 8px;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.blueGray["50"]};
`;

export const MonthlyAmountValues = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 32px;

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
    margin-left: 8px;
    font-size: 32px;
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
    padding: 24px;

    h2 {
      font-size: 18px;
    }
    strong {
      font-size: 24px;
    }
  }
`;

export const MonthlyAmountDescription = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 24px 32px;
  background-color: ${({ theme }) => theme.colors.blueGray["10"]};
  font-family: ${({ theme }) => theme.fonts.family.secondary};
  font-size: 12px;
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
