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
            console.log('fetching users...')
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json() as UserData[]
            setUsers(data)
            console.log('done!', data)
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
            </ol>
            <hr />
            <div>
                <button onClick={handleFetchUsers}>Fetch users</button>
            </div>
            <div>
                <h2>Active user</h2>
                <p>Name: {activeUser?.name || 'n/a'}</p>
                <p>Email: {activeUser?.email || 'n/a'}</p>
                <p>Phone: {activeUser?.phone || 'n/a'}</p>
            </div>
            <div>
                <h2>Users:</h2>
                {users.map(user => (
                    <UserCard key={user.id} user={user} onClick={handleClick} />
                ))}
            </div>
        </>
    )
}