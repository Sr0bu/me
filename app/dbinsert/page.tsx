'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button' // Importiere die Schaltfläche aus ShadCN

export default function Home() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await fetch('/api/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email }),  // Sende sowohl name als auch email
        })

        if (res.ok) {
            setMessage('Benutzer erfolgreich gespeichert!')
            setName('')
            setEmail('')  // Leere das E-Mail-Feld
        } else {
            const { error } = await res.json()
            setMessage(`Fehler: ${error}`)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-zinc-900">
            <div className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-6">Neuen Benutzer erstellen</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name eingeben"
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950 dark:bg-black dark:text-white"
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-Mail eingeben"
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950 dark:bg-black dark:text-white"
                    />
                    <Button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
                        Speichern
                    </Button>
                </form>
                {message && <p className="mt-4 text-center text-gray-700 dark:text-white font-semibold">{message}</p>}
            </div>
        </div>
    )
}
