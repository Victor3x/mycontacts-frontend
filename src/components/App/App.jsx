import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../../assets/styles/global'
import { Container } from './style.js'

import theme from '../../assets/styles/themes/default'
import { Header } from '../Header'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  )
}

export default App
