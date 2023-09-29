import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Styles
import './index.css'

// Routes
import BasicFetch from './basic-fetch/BasicFetch.tsx'

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
                path: '/basic-fetch',
                element: <BasicFetch />,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
