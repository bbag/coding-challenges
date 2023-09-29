import { Link } from 'react-router-dom'
import styles from './_TopNav.module.css'

export default function TopNav() {
    return (
        <>
            <nav className={styles['top-nav']}>
                <ul className="container">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/basic-fetch">Basic Fetch</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}