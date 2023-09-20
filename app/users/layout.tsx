import getUsers from '@/app/actions/get-users'

import Sidebar from '@/app/components/sidebar/sidebar'
import UserList from './components/user-list'

export default async function UsersLayout({ children }: { children: React.ReactNode }) {
  const users = await getUsers()

  return (
    <Sidebar>
      <UserList items={users} />
      <div className='h-full'>{children}</div>
    </Sidebar>
  )
}
