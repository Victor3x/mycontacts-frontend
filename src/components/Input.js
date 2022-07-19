import styled, { css } from 'styled-components'

export const Input = styled.input`
  width: 100%;
  height: 52px;
  background-color: #fff;
  padding: 0 16px;
  font-size: 16px;
  border: none;
  border: 2px solid #fff;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  outline: none;
  transition: all 0.2s ease-in;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  ${({ theme, error }) =>
    error &&
    css`
      color: ${theme.colors.danger.main};
      border-color: ${theme.colors.danger.main} !important;
    `}
`
