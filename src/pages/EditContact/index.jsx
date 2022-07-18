import { PageHeader } from '../../components/PageHeader'
import { ContactForm } from '../../components/ContactForm/index'
import { Container } from './style'

export const EditContact = () => {
  return (
    <Container>
      <PageHeader title="Editar contato" />
      <ContactForm buttonLabel="Salvar alterações" />
    </Container>
  )
}
