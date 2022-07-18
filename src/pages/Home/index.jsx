import {
  Container,
  InputSearchContainer,
  Header,
  ListContainer,
  Card
} from './style'

import arrow from '../../assets/images/icons/arrow.svg'
import edit from '../../assets/images/icons/edit.svg'
import trash from '../../assets/images/icons/trash.svg'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button>
            <span>Nome</span>
            <img src={arrow} alt="" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact">
              <strong>Joao Vitor</strong>
              <small>instagram</small>
            </div>
            <span>joaovitor@devacademy.com</span>
            <span>(82) 99999-9999</span>
          </div>
          <div className="actions">
            <Link to="/edit">
              <img src={edit} alt="Icon edit contact" />
            </Link>
            <button>
              <img src={trash} alt="Icon delete contact" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  )
}
