import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { userId } = req.query

    if (!userId) {
        return res.status(400).json({ error: 'userId is required' })
    }

    // Den Benutzer anhand der userId aus der Datenbank abrufen
    const user = await prisma.user.findUnique({
        where: { id: String(userId) },
        select: { username: true, email: true }, // Gebe nur den Benutzernamen und die E-Mail zurück
    })

    if (!user) {
        return res.status(404).json({ error: 'User not found' })
    }

    // Erfolgreiche Antwort mit den Benutzerdaten
    return res.status(200).json(user)
}

export default handler
