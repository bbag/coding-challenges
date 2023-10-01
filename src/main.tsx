import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Styles
import './index.css'

// Routes
import Autocomplete from './challenges/autocomplete/Autocomplete.tsx'
import BasicFetch from './challenges/basic-fetch/BasicFetch.tsx'
import BreakingBad from './challenges/breaking-bad/BreakingBad.tsx'
import CheckoutQueue from './challenges/checkout-queue/CheckoutQueue.tsx'
import ClickDots from './challenges/click-dots/ClickDots.tsx'
import ConnectFour from './challenges/connect-four/ConnectFour.tsx'
import MemoryGame from './challenges/memory-game/MemoryGame.tsx'
import SubstringLength from './challenges/substring-length/SubstringLength.tsx'
import Thesaurus from './challenges/thesaurus/Thesaurus.tsx'
import TicTacToe from './challenges/tic-tac-toe/TicTacToe.tsx'
import TypingSpeed from './challenges/typing-speed/TypingSpeed.tsx'

// 404 Page
const ErrorPage = () => <h1>404 – Page Not Found</h1>

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <>
                    <h1>Coding Challenges Playground</h1>
                    <p>This is just a fun little playground to test out various React coding challenges from across the web.</p>
                    <p>Nothing too serious, just a sandbox to brush up some skills in!</p>
                </>,
            },
            {
                path: '/autocomplete',
                element: <Autocomplete />,
            },
            {
                path: '/basic-fetch',
                element: <BasicFetch />,
            },
            {
                path: '/breaking-bad',
                element: <BreakingBad />,
            },
            {
                path: '/checkout-queue',
                element: <CheckoutQueue />,
            },
            {
                path: '/click-dots',
                element: <ClickDots />,
            },
            {
                path: '/connect-four',
                element: <ConnectFour />,
            },
            {
                path: '/memory-game',
                element: <MemoryGame />,
            },
            {
                path: '/substring-length',
                element: <SubstringLength />,
            },
            {
                path: '/thesaurus',
                element: <Thesaurus />,
            },
            {
                path: '/tic-tac-toe',
                element: <TicTacToe />,
            },
            {
                path: '/typing-speed',
                element: <TypingSpeed />,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
