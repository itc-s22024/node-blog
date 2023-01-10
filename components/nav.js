import Link from "next/link"
import styles from 'styles/nav.module.css'

const Nav = () => 
    <nav>
        <ul className={styles.list}>
            <li>
                <Link href="/">
                    Home
                </Link>
            </li>
            <li>
                <Link href="/about">
                    about
                </Link>
            </li>
            <li>
                <Link href="/blog">
                    blog
                </Link>
            </li>
        </ul>
    </nav>
     
export default Nav