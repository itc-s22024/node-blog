import styles from 'styles/two-column.module.css'

const TwoColumn = ({ children }) =>
    <div className={styles.flexContainer}>
        {children}
    </div>

const TwoColumnMain = ({ children }) =>
    <div className={styles.main}>
        {children}
    </div>

const TwoColumnSidebar = ({ children }) =>
    <div className={styles.sidebar}>
        {children}
    </div>

export {TwoColumn, TwoColumnMain, TwoColumnSidebar}