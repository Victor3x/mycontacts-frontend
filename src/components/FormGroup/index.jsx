import { Container } from './style'
import PropTypes from 'prop-types'

export const FormGroup = ({ children }) => {
  return <Container>{children}</Container>
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired
}
