import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email } = req.body

        // Überprüfen, ob der Name und die E-Mail übergeben wurden
        if (!name || typeof name !== 'string' || name.trim() === '') {
            return res.status(400).json({ error: 'Name is required and must be a non-empty string' })
        }

        if (!email || typeof email !== 'string' || email.trim() === '') {
            return res.status(400).json({ error: 'Email is required and must be a non-empty string' })
        }

        try {
            const user = await prisma.user.create({
                data: {
                    name: name.trim(), // Name trimmen, um führende/trailing Leerzeichen zu entfernen
                    email: email.trim(), // E-Mail trimmen
                },
            })
            return res.status(200).json(user) // Erfolgreiche Antwort mit dem gespeicherten Benutzer
        } catch (error) {
            console.error('Error creating user:', error)
            return res.status(500).json({ error: 'Failed to create user', details: error.message })
        }
    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}
