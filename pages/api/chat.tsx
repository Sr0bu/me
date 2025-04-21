// pages/chat.tsx
import jwt from 'jsonwebtoken'
import { GetServerSideProps } from 'next'

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your-secret-key'

export const getServerSideProps: GetServerSideProps = async (context) => {
    const token = context.req.cookies.token

    if (!token) {
        return {
            redirect: {
                destination: '/signin',
                permanent: false,
            },
        }
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY) as { userId: string }
        return { props: { userId: decoded.userId } }
    } catch {
        return {
            redirect: {
                destination: '/signin',
                permanent: false,
            },
        }
    }
}

export default function ChatPage({ userId }: { userId: string }) {
    return <div>Willkommen im Chat, User {userId}</div>
}
