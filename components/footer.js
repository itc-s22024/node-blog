import Container from "./container"
import Logo from "./logo"
import styles from 'styles/footer.module.css'

const Footer = () =>
  <footer className={styles.wrapper}>
    <Container>
      <div className={styles.flexContainer}>
        <Logo />
        [ソーシャル]
    </div>
    </Container>
  </footer>
export default Footer
