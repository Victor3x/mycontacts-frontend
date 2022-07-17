import { Container } from './style'

import logo from '../../assets/images/icons/logo.svg'

export const Header = () => {
  return (
    <Container>
      <img src={logo} alt="Logo mycontacts" />
    </Container>
  )
}
