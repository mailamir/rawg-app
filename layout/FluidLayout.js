import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'

export default function FluidLayout({ children }) {
  return (
    <Layout>
      <Header />
      {children}
      <Footer/>
    </Layout>
  )
}

const Layout = styled.div`
  padding: 0 20px;
`