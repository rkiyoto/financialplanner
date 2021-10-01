import styled from "styled-components";

export const Button = styled.button`
  padding: 18px;
  background-color: ${({ theme }) => theme.colors.brandColorPrimary};
  border: 0;
  border-radius: 32px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.family.secondary};
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  :hover {
    opacity: 0.8;
  }
`;
