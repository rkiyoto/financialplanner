import styled from "styled-components";

export const InputSection = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.space.large};
  border-radius: ${({ theme }) => theme.space.small};
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
    margin-left: ${({ theme }) => theme.space.medium};
  }

  @media (max-width: 500px) {
    flex: 1;

    :last-of-type {
      margin: 0;
      margin-top: ${({ theme }) => theme.space.medium};
    }
  }
`;

export const InputLabel = styled.h4`
  font-size: ${({ theme }) => theme.fonts.size.small};
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.family.secondary};
  margin-bottom: ${({ theme }) => theme.space.xs};
  color: ${({ theme }) => theme.colors.blueGray["900"]};

  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.fonts.size.xs};
  }
`;

export const Input = styled.input`
  padding: 14px;
  /* font-size: 18px; */
  font-family: ${({ theme }) => theme.fonts.family.primary};
  flex: 1;
  min-width: 0;
  font-weight: 500;
  border-radius: ${({ theme }) => theme.space.xs};
  border: 1px solid ${({ theme }) => theme.colors.blueGray["50"]};
  color: ${({ theme }) => theme.colors.blueGray["600"]};
`;
