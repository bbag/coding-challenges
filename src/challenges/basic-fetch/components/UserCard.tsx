import styles from './_UserCard.module.css'

type UserObj = {
    id: number
    name: string
    phone: string
    email: string
}

type ComponentProps = {
    onClick: (user: UserObj) => void
    user: UserObj
}

export default function UserCard({ onClick, user }: ComponentProps) {
    return (
        <div className={styles['user-card']} onClick={() => onClick(user)}>
            <p>
                <strong>{user.name}</strong><br />
                {user.email}<br />
                {user.phone}
            </p>
        </div>
    )
}