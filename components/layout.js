import Container from './container'
import Header from '/components/header'
import Footer from '/components/footer'

const Layout = ({ children }) =>
  <>
    <Header />

    <main>
      <Container>{children}</Container>
    </main>
    <Footer />
  </>
export default Layout
