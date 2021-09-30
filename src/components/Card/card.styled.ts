import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 40px;
  border-radius: 8px;
  width: 480px;
  height: 400px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
`;