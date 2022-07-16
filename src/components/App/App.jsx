import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../../assets/styles/global'
import { Container } from './style.js'

import theme from '../../assets/styles/themes/default'
import { Header } from '../Header'
import { ContactList } from '../ContactList'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Header />
        <ContactList />
      </Container>
    </ThemeProvider>
  )
}

export default App
