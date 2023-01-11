import styles from 'styles/post-body.module.css'

const PostBody = ({ children }) =>
    <div className={styles.stack}>
        {children}
    </div>

export default PostBody