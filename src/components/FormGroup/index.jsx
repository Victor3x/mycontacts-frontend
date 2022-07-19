import { Container } from './style'
import PropTypes from 'prop-types'

export const FormGroup = ({ children, error }) => {
  return (
    <Container>
      {children}
      {!!error && <small>{error}</small>}
    </Container>
  )
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string
}

FormGroup.defaultProps = {
  error: null
}
