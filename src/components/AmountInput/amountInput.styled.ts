import styled from "styled-components";
import CurrencyInput from "react-currency-input";

export const Container = styled.div`
  display: flex;
  flex: 1 1 0;
  align-items: center;
  padding-left: 12px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.blueGray["50"]};
  border-radius: ${({ theme }) => theme.space.xs};
`;

export const AmountInput = styled(CurrencyInput)`
  flex: 1;
  height: 44px;
  width: 200px;
  margin-left: 8px;
  border: 0;
  color: ${({ theme }) => theme.colors.blueGray["600"]};
  font-size: 24px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.family.primary};
  background-color: transparent;
`;
