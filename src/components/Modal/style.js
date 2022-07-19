import styled from 'styled-components'

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  max-width: 450px;
  width: 100%;
  height: 200px;
  position: relative;
  padding: 24px;

  h1 {
    font-size: 22px;
    color: ${({ theme, danger }) =>
      danger ? theme.colors.danger.main : theme.colors.gray[900]};
  }

  p {
    margin-top: 8px;
  }
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 32px;

  .cancel-button {
    background: transparent;
    border: none;
    padding-right: 8px;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`
