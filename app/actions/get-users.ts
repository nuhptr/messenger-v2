import prisma from '@/app/libs/prismadb'

import getSession from './get-session'

export default async function getUsers() {
  const session = await getSession()

  if (!session?.user?.email) return []

  try {
    const user = await prisma.user.findMany({
      orderBy: { createdAt: 'desc' },
      // dimana user yang sedang login tidak diikutsertakan
      where: { NOT: { email: session.user.email } },
    })

    return user
  } catch (error: any) {
    console.error(error)
    return []
  }
}
