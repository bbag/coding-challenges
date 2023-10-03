import { NavLink } from 'react-router-dom'
import styles from './_PrimaryNav.module.css'

export default function TopNav() {

    const challenges = [
        { name: 'Home',             path: '/' },
        { name: 'Autocomplete',     path: '/autocomplete',     isDone: false },
        { name: 'Basic Fetch',      path: '/basic-fetch',      isDone: true  },
        { name: 'Breaking Bad',     path: '/breaking-bad',     isDone: false },
        { name: 'Checkout Queue',   path: '/checkout-queue',   isDone: true  },
        { name: 'Click Dots',       path: '/click-dots',       isDone: false },
        { name: 'Connect Four',     path: '/connect-four',     isDone: false },
        { name: 'Memory Game',      path: '/memory-game',      isDone: false },
        { name: 'Substring Length', path: '/substring-length', isDone: true  },
        { name: 'Thesaurus',        path: '/thesaurus',        isDone: false },
        { name: 'Tic Tac Toe',      path: '/tic-tac-toe',      isDone: false },
        { name: 'Typing Speed',     path: '/typing-speed',     isDone: false },
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
                                    {challenge.hasOwnProperty('isDone')
                                        ? challenge.isDone
                                            ? <svg className={`${styles['line-icon']} ${styles['line-icon--is-done']}`} viewBox="0 0 24 24">
                                                <path d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"></path>
                                            </svg>
                                            : <svg className={styles['line-icon']} viewBox="0 0 24 24">
                                                <path d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001z"></path>
                                            </svg>
                                        : <svg className={`${styles['line-icon']} ${styles['line-icon--home']}`} viewBox="0 0 24 24">
                                            <path d="M15,22v-8H9v8H5c-1.1,0-2-0.9-2-2V9l9-7l9,7v11c0,1.1-0.9,2-2,2H15z" />
                                        </svg>
                                    }
                                    {challenge.name}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}