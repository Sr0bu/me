'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {Button} from "@/components/ui/button";
import LoadingPage from "@/components/loading/LoadingPage";

const ChatPage = () => {
    const router = useRouter()
    const [userId, setUserId] = useState<string | null>(null)
    const [username, setUsername] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const checkAuth = async () => {
            const res = await fetch('/api/me', {
                credentials: 'include', // Cookie mitgeben
            })

            if (res.status === 401) {
                router.push('/signin') // Redirect zu SignIn, falls nicht authentifiziert
                return
            }

            const data = await res.json()

            // Setze den userId und username aus dem API Response
            setUserId(data.user?.userId ?? null)
            setUsername(data.user?.username ?? null)
            setLoading(false)
        }

        checkAuth()
    }, [router])

    // Wenn der userId vorhanden ist, leite zur Chat-Seite weiter
    useEffect(() => {
        if (userId && userId !== 'undefined') {
            // Hier wird der userId nur weitergegeben, wenn er tatsächlich vorhanden ist
            router.push(`/chat?userId=${userId}`)
        }
    }, [userId, router])

    if (loading) return <div>
        <LoadingPage />
    </div>

    const handleLogout = async () => {
        await fetch('/api/logout', {
            method: 'POST',
            credentials: 'include',
        })

        router.push('/signin')
    }

    return (
        <div>
            Welcome to the chat, {username} (User ID: {userId})

            <div>
                <Button variant="destructive" onClick={handleLogout}>Logout</Button>
            </div>
        </div>
    )
}

export default ChatPage
