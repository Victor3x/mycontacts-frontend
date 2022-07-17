import React from 'react'
import { Container, Header, ListContainer, Card } from './style'
import arrow from '../../assets/images/icons/arrow.svg'
import edit from '../../assets/images/icons/edit.svg'
import trash from '../../assets/images/icons/trash.svg'

export const ContactList = () => {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>
        <a href="#">Novo contato</a>
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
            <a href="/">
              <img src={edit} alt="Icon edit contact" />
            </a>
            <button>
              <img src={trash} alt="Icon delete contact" />
            </button>
          </div>
        </Card>

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
            <a href="/">
              <img src={edit} alt="Icon edit contact" />
            </a>
            <button>
              <img src={trash} alt="Icon delete contact" />
            </button>
          </div>
        </Card>

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
            <a href="/">
              <img src={edit} alt="Icon edit contact" />
            </a>
            <button>
              <img src={trash} alt="Icon delete contact" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  )
}
