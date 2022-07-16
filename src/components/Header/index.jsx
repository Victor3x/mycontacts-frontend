import { Container, InputSearchContainer } from './style'

import logo from '../../assets/images/logo.svg'

export const Header = () => {
  return (
    <Container>
      <img src={logo} alt="Logo mycontacts" />
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>
    </Container>
  )
}
