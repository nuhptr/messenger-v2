import clsx from 'clsx'
import Link from 'next/link'

interface DesktopItemProps {
  href: string
  label: string
  icon: any
  onClick?: () => void
  active?: boolean
}

export default function DesktopItem({
  href,
  label,
  icon: Icon,
  onClick,
  active,
}: DesktopItemProps) {
  const handleClick = () => {
    if (onClick) return onClick()
  }

  return (
    <li onClick={handleClick}>
      <Link
        href={href}
        className={clsx(
          `group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold text-gray-500 hover:text-sky-500 hover:bg-sky-50`,
          active && 'bg-sky-50 text-sky-500'
        )}>
        <Icon className='h-6 w-6 shrink-0' />
        <span className='sr-only'>{label}</span>
      </Link>
    </li>
  )
}
