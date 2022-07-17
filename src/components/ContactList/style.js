import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 32px;
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    font-size: 24px;
    color: #222;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: 700;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;
    text-decoration: none;
    padding: 8px 16px;
    transition: all 0.2s ease-in;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`
export const ListContainer = styled.div`
  margin-top: 32px;

  header {
    margin-bottom: 8px;

    button {
      background: transparent;
      border: none;
      display: flex;
      align-items: center;

      span {
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        font-size: 16px;
      }

      img {
        margin-left: 8px;
      }
    }
  }
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;

  & + & {
    margin-top: 16px;
  }

  .info {
    .contact {
      display: flex;
      align-items: center;

      small {
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        text-transform: uppercase;
        margin-left: 8px;
        background-color: ${({ theme }) => theme.colors.primary.lighter};
        padding: 4px;
        border-radius: 4px;
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }

  .actions {
    display: flex;
    align-items: center;
    grid-gap: 8px;

    button {
      border: none;
      background-color: transparent;
    }
  }
`
