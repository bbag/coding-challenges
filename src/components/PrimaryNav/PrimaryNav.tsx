import { NavLink } from 'react-router-dom'
import styles from './_PrimaryNav.module.css'

export default function TopNav() {

    const challenges = [
        { name: 'Home', path: '/' },
        { name: 'Autocomplete', path: '/autocomplete' },
        { name: 'Basic Fetch', path: '/basic-fetch' },
        { name: 'Breaking Bad', path: '/breaking-bad' },
        { name: 'Checkout Queue', path: '/checkout-queue' },
        { name: 'Click Dots', path: '/click-dots' },
        { name: 'Memory Game', path: '/memory-game' },
        { name: 'Substring Length', path: '/substring-length' },
        { name: 'Thesaurus', path: '/thesaurus' },
        { name: 'Tic Tac Toe', path: '/tic-tac-toe' },
        { name: 'Typing Speed', path: '/typing-speed' },
    ]

    return (
        <>
            <nav className={styles['primary-nav']}>
                <h2>Challenges:</h2>
                <ul className="container">
                    {challenges.map((challenge) => {
                        return (
                            <li key={challenge.path}>
                                <NavLink
                                    to={challenge.path}
                                    className={({ isActive, isPending }) =>
                                        isActive
                                            ? `${styles['nav-link']} ${styles['nav-link--active']}`
                                            : isPending
                                                ? `${styles['nav-link']} ${styles['nav-link--pending']}`
                                                : `${styles['nav-link']}`
                                    }
                                >
                                    {challenge.name}
                                </NavLink>
                            </li>
                        )
                    })}

                    {/* <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/autocomplete">Autocomplete</Link>
                    </li>
                    <li>
                        <Link to="/basic-fetch">Basic Fetch</Link>
                    </li>
                    <li>
                        <Link to="/breaking-bad">Breaking Bad</Link>
                    </li>
                    <li>
                        <Link to="/checkout-queue">Checkout Queue</Link>
                    </li>
                    <li>
                        <Link to="/click-dots">Click Dots</Link>
                    </li>
                    <li>
                        <Link to="/memory-game">Memory Game</Link>
                    </li>
                    <li>
                        <Link to="/substring-length">Substring Length</Link>
                    </li>
                    <li>
                        <Link to="/thesaurus">Thesaurus</Link>
                    </li>
                    <li>
                        <Link to="/tic-tac-toe">Tic Tac Toe</Link>
                    </li>
                    <li>
                        <Link to="/typing-speed">Typing Speed</Link>
                    </li> */}
                </ul>
            </nav>
        </>
    )
}