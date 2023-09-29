import { Outlet } from 'react-router-dom'
import TopNav from './components/TopNav/TopNav.tsx'

export default function App() {
    return (
        <>
            <TopNav />
            <div className="container">
                <Outlet />
            </div>
        </>
    )
}