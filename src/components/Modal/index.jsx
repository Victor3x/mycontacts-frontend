import { Overlay, Container, Footer } from './style'
import { Button } from '../Button'
import PropTypes from 'prop-types'

export const Modal = ({ danger }) => {
  return (
    <Overlay>
      <Container danger={danger}>
        <h1>Tem certeza que deseja remover o contato ”Joao Vitor”?</h1>
        <p>Esta ação não poderá ser desfeita!</p>
        <Footer>
          <button type="button" className="cancel-button">
            Cancelar
          </button>
          <Button danger={danger}>Deletar</Button>
        </Footer>
      </Container>
    </Overlay>
  )
}

Modal.propTypes = {
  danger: PropTypes.bool
}

Modal.defaultProps = {
  danger: false
}
