import clsx from 'clsx'
import Link from 'next/link'

interface DesktopItemProps {
  href: string
  label: string
  icon: any
  onClick?: () => void
  active?: boolean
}

export default function DesktopItem({ href, label, icon, onClick, active }: DesktopItemProps) {
  return <div>DesktopItem</div>
}
