import styled from "styled-components";
import Button from "../Button";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  padding-top: 32px;
  border-radius: 8px;
  width: 480px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
`;

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
`;

const Section = styled.div`
  display: flex;
  margin-top: 24px;
  border-radius: 8px;
`;

export const InputSection = styled(Section)`
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const InputField = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;

  :last-of-type {
    flex: 1;
    margin-left: 16px;
  }

  @media (max-width: 500px) {
    flex: 1;

    :last-of-type {
      margin: 0;
      margin-top: 16px;
    }
  }
`;

export const InputLabel = styled.h4`
  font-size: 14px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.family.secondary};
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.blueGray["900"]};
`;

export const Input = styled.input`
  padding: 14px;
  /* font-size: 18px; */
  font-family: ${({ theme }) => theme.fonts.family.primary};
  flex: 1;
  min-width: 0;
  font-weight: 500;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.blueGray["50"]};
  color: ${({ theme }) => theme.colors.blueGray["600"]};
`;

export const MonthlyAmountInfo = styled(Section)`
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.blueGray["50"]};
`;

export const MonthlyAmountValues = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px 32px;

  h2 {
    margin: 0;
    font-size: 20px;
    font-weight: 400;
    font-family: ${({ theme }) => theme.fonts.family.secondary};
    color: ${({ theme }) => theme.colors.blueGray["900"]};

    @media (max-width: 500px) {
      font-size: 18px;
    }
  }

  strong {
    margin: 0;
    font-size: 32px;
    font-weight: 500;
    font-family: ${({ theme }) => theme.fonts.family.primary};
    max-width: 200px;
    color: ${({ theme }) => theme.colors.brandColorSecondary};

    @media (max-width: 500px) {
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
`;

export const ConfirmButton = styled(Button)`
  align-self: center;
  margin-top: 32px;
  width: 320px;
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2pt ${({ theme }) => theme.colors.blueGray["400"]};
  }
`;
