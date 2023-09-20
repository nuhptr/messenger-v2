'use client'

import { User } from '@prisma/client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'

import Avatar from '@/app/components/avatar'

interface UserBoxProps {
  data: User
}

export default function UserBox({ data }: UserBoxProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleClick = useCallback(() => {
    setIsLoading(true)
    axios
      .post('/api/conversations', { userId: data.id })
      .then((data) => {
        router.push(`/conversations/${data.data.id}`)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [router, data])

  return (
    <div
      className='w-full p-3 relative flex items-center space-x-4 bg-white hover:bg-neutral-100 rounded-lg transition cursor-pointer'
      onClick={handleClick}>
      <Avatar user={data} />
      <div className='min-w-0 flex-1'>
        <div className='focus:outline-none'>
          <div className='flex justify-between items-center mb-1'>
            <p className='text-sm font-medium text-gray-900'>{data.name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
