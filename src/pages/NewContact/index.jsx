import { PageHeader } from '../../components/PageHeader/index'
import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { Button } from '../../components/Button'

export const NewContact = () => {
  return (
    <>
      <PageHeader title="Novo contato" />
      <Input type="text" placeholder="Nome" />
      <Select>
        <option value="123">Instagram</option>
        <option value="123">Twitter</option>
        <option value="123">Facebook</option>
      </Select>
      <Button>Cadastrar</Button>
    </>
  )
}
