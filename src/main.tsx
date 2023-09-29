import React from 'react'
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
                element: <h1>Coding Challenges</h1>,
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
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
