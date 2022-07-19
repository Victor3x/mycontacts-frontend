import React from 'react'
import { Input } from '../Input'
import { Select } from '../Select'
import { Button } from '../Button'
import { Container, ButtonContainer } from './style'
import { FormGroup } from '../FormGroup/index'
import PropTypes from 'prop-types'

export const ContactForm = ({ buttonLabel }) => {
  return (
    <Container>
      <FormGroup error="O formato do e-mail é inválido">
        <Input type="text" placeholder="Nome" error />
      </FormGroup>

      <FormGroup>
        <Input type="email" placeholder="Email" />
      </FormGroup>

      <FormGroup>
        <Input type="phone" placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="123">Instagram</option>
          <option value="123">Twitter</option>
          <option value="123">Tik Tok</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button>{buttonLabel}</Button>
      </ButtonContainer>
    </Container>
  )
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}
