import Container from "./container"
import Logo from "./logo"
import Nav from "./nav"
import styles from 'styles/header.module.css'

const Header = () =>
  <header>
    <Container large>
      <div className={styles.flexContainer}>
       <Logo boxOn />
        <Nav />
      </div>
    </Container>
  </header>
export default Header
