// pages/api/me.ts
import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your-secret-key'

function getTokenFromCookie(req: NextApiRequest): string | null {
    const cookies = req.headers.cookie
    const match = cookies?.match(/token=([^;]+)/)
    return match ? match[1] : null
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const token = getTokenFromCookie(req)
    if (!token) return res.status(401).json({ error: 'Not authenticated' })

    try {
        const decoded = jwt.verify(token, SECRET_KEY) as {
            userId: string
            username: string
        }

        res.status(200).json({ user: { userId: decoded.userId, username: decoded.username } })
    } catch {
        res.status(401).json({ error: 'Invalid token' })
    }
}
