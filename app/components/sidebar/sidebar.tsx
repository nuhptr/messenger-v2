import DesktopSidebar from './desktop-sidebar'
import MobileFooter from './mobile-footer'

import getCurrentUser from '@/app/actions/get-current-user'

export default async function Sidebar({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser()

  return (
    <div className='h-full'>
      {/* ! exclamation mark is ensuring that your data is not null */}
      <DesktopSidebar currentUser={currentUser!} />
      <MobileFooter />
      <main className='lg:pl-20 h-full'>{children}</main>
    </div>
  )
}
