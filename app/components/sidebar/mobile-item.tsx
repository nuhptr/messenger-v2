'use client'

import Link from 'next/link'
import clsx from 'clsx'

interface MobileItemProps {
  href: string
  label: string
  icon: any
  onClick?: () => void
  active?: boolean
}

export default function MobileItem({ href, label, icon: Icon, onClick, active }: MobileItemProps) {
  const handleClick = () => {
    if (onClick) return onClick()
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={clsx(
        `group flex gap-x-3 text-sm leading-6 font-semibold w-full justify-center p-4 text-gray-500 hover:text-sky-500 hover:bg-sky-50`,
        active && 'bg-sky-50 text-sky-500'
      )}>
      <Icon className='h-6 w-6' />
    </Link>
  )
}
