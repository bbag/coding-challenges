import { Outlet } from 'react-router-dom'
import PrimaryNav from './components/PrimaryNav/PrimaryNav.tsx'

export default function App() {
    return (
        <div className="container layout">
            <PrimaryNav />
            <main>
                <Outlet />
            </main>
        </div>
    )
}