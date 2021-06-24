import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '/config'
import FluidLayout from '/layout/FluidLayout'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Verdana, Arial, Helvetica, sans-serif;
    font-size: 100%;
    background-color: #151515;
    color: #fff;
  }
  h1,h2,h3,h4 {
    font-weight: 500;
    margin: 0.5em 0;
  }
  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 30px;
  }
  h3 {
    font-size: 20px;
  }
  input, select {
    box-sizing: border-box;
  }
  p {
    line-height: 1.5rem;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <FluidLayout>
          <Component {...pageProps} />
        </FluidLayout>
      </ThemeProvider>
    </>
  )
}
