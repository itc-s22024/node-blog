import styles from 'styles/post-header.module.css'
import ConverDate from './convert-date'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

const PostHeader = ({ title, subtitle, publish = '' }) =>
    <div className={styles.stack}>
        <p className={styles.subtitle}>{subtitle}</p>
        <h1 className={styles.title}>{title}</h1>
        {publish && (
            <div className={styles.publish}>
                <FontAwesomeIcon icon={faClock} size="lg" color="var(--gray-25)" />
                <ConverDate dateISO = {publish}/>
            </div>
        )}
    </div>

export default PostHeader