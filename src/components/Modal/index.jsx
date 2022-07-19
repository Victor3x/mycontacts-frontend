import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { Overlay, Container, Footer } from './style'
import { Button } from '../Button'

export const Modal = ({ danger }) => {
  return ReactDOM.createPortal(
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
    </Overlay>,
    document.getElementById('modal-root')
  )
}

Modal.propTypes = {
  danger: PropTypes.bool
}

Modal.defaultProps = {
  danger: false
}
