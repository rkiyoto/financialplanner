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

export const ConfirmButton = styled(Button)`
  align-self: center;
  margin-top: 32px;
  width: 320px;
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2pt ${({ theme }) => theme.colors.blueGray["400"]};
  }
`;
