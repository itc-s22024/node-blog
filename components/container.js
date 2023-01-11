import styles from 'styles/container.module.css'

const Container = ({ children, large = false }) =>
    <div className={large ? styles.large : styles.default}>
        {children}
    </div>

export default Container