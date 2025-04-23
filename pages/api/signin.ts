// pages/api/signin.ts
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your-secret-key'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

    const { identifier, password } = req.body

    if (!identifier || !password) {
        return res.status(400).json({ error: 'Missing identifier or password' })
    }

    // Email oder Username erkennen
    const isEmail = identifier.includes('@')

    const user = isEmail
        ? await prisma.user.findUnique({ where: { email: identifier } })
        : await prisma.user.findFirst({ where: { username: identifier } })

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: 'Invalid credentials' })
    }

    const token = jwt.sign(
        { userId: user.id, username: user.username },
        SECRET_KEY,
        { expiresIn: '30d' }
    )

    res.setHeader(
        'Set-Cookie',
        `token=${token}; HttpOnly; Path=/; Max-Age=3600; SameSite=Lax`
    )

    return res.status(200).json({ message: 'Login successful', userId: user.id })
}