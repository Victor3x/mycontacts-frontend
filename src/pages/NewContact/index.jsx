import { PageHeader } from '../../components/PageHeader/index'
import { ContactForm } from '../../components/ContactForm'

export const NewContact = () => {
  return (
    <>
      <PageHeader title="Novo contato" />
      <ContactForm buttonLabel="Cadastrar" />
    </>
  )
}
