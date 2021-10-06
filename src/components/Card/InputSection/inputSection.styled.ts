import styled from "styled-components";

export const InputSection = styled.div`
  display: flex;
  margin-top: 24px;
  border-radius: 8px;
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

  @media (max-width: 500px) {
    font-size: 12px;
  }
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
