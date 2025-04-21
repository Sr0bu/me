'use server'

import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

type State = {
    success?: boolean
    error?: string
}

export async function registerUserAction(prevState: State, formData: FormData): Promise<State> {
    const username = formData.get('username') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    if (!username || !email || !password) {
        return { error: 'All fields are required' }
    }

    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
        return { error: 'Email already in use' }
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    await prisma.user.create({
        data: {
            username,
            email,
            password: hashedPassword,
        },
    })

    return { success: true }
}
