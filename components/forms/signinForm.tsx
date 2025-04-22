'use client'

import Link from "next/link"
import {useEffect, useState} from "react"
import { useRouter } from "next/navigation" // useRouter für Redirect

import {
    CardTitle,
    CardDescription,
    CardHeader,
    CardContent,
    CardFooter,
    Card,
} from "@/components/ui/card"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"





export function SigninForm() {
    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const router = useRouter()  // useRouter-Hook für Umleitung

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await fetch('/api/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ identifier, password }),
        })

        const data = await res.json()

        if (res.ok) {
            setSuccessMessage('Sign-in successful! Redirecting...')
            setError('')

            // Nach erfolgreichem Login zur /chat-Seite umleiten
            router.push(`/chat?userId=${data.userId}`)  // Benutzer-ID als URL-Parameter (oder Token)
        } else {
            setError(data.error || 'Something went wrong')
            setSuccessMessage('')
        }
    }

    return (
        <div className="w-full max-w-md px-4 sm:px-0">
            <form onSubmit={handleSubmit}>
                <Card>
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-3xl font-bold">Sign In</CardTitle>
                        <CardDescription>
                            Enter your details to sign in to your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="identifier">Email or Username</Label>
                            <Input
                                id="identifier"
                                name="identifier"
                                type="text"
                                placeholder="Username or email"
                                value={identifier}
                                onChange={(e) => setIdentifier(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col">
                        <button type="submit" className="w-full">
                            Sign In
                        </button>
                    </CardFooter>
                </Card>

                {error && (
                    <p className="mt-2 text-sm text-red-500 text-center">{error}</p>
                )}

                {successMessage && (
                    <p className="mt-2 text-sm text-green-600 text-center">{successMessage}</p>
                )}

                <div className="mt-4 text-center text-sm">
                    Don&apos;t have an account?
                    <Link className="underline ml-2" href="/signup">
                        Sign Up
                    </Link>
                </div>
            </form>
        </div>
    )
}
