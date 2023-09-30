import { useState } from 'react'
import UserCard from './components/UserCard'

type UserData = {
    id: number
    name: string
    email: string
    phone: string
}

export default function BasicFetch() {
    const [users, setUsers] = useState<UserData[]>([])
    const [activeUser, setActiveUser] = useState<null | UserData>(null)

    async function handleFetchUsers() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json() as UserData[]
            const sortedData = data.sort((a, b) => a.name > b.name ? 1 : -1)
            setUsers(sortedData)
        }

        catch(error) {
            console.log(error)
        }
    }

    function handleClick(user: UserData) {
        setActiveUser(user)
    }

    return (
        <>
            <h1>Basic Fetch</h1>
            <h2>Instructions</h2>
            <ol>
                <li>Create a button that fetches some user data from an API when clicked.</li>
                <li>The API endpoint is https://jsonplaceholder.typicode.com/users</li>
                <li>Display this data in a list of user "cards" with each user's name, email address, and phone number.</li>
                <li>When a user card is clicked, display that user's info at the top of the app as the "active user".</li>
                <li><strong>Bonus:</strong> sort the users alphabetically by name.</li>
            </ol>
            <hr />
            <div>
                <button onClick={handleFetchUsers}>Fetch users</button>
            </div>
            <div>
                <h2>Active user</h2>
                <p>
                    <strong>Name:</strong> {activeUser?.name || 'n/a'}<br />
                    <strong>Email:</strong> {activeUser?.email || 'n/a'}<br />
                    <strong>Phone:</strong> {activeUser?.phone || 'n/a'}
                </p>
            </div>
            <h2>Users:</h2>
            <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                {users.map(user => (
                    <UserCard key={user.id} user={user} onClick={handleClick} />
                ))}
            </div>
        </>
    )
}