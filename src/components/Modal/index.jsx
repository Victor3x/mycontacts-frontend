import { Overlay, Container, Footer } from './style'
import { Button } from '../Button'

export const Modal = () => {
  return (
    <Overlay>
      <Container>
        <h1>Tem certeza que deseja remover o contato ”Joao Vitor”?</h1>
        <p>Esta ação não poderá ser desfeita!</p>
        <Footer>
          <button type="button" className="cancel-button">
            Cancelar
          </button>
          <Button>Deletar</Button>
        </Footer>
      </Container>
    </Overlay>
  )
}
