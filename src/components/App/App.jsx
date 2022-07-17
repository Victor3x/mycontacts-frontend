import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../../assets/styles/global'
import { Container } from './style.js'

import theme from '../../assets/styles/themes/default'
import { Header } from '../Header'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../../Routes'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
