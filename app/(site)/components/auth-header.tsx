import Image from 'next/image'

export default function AuthHeader() {
  return (
    <div className='sm:mx-auto sm:w-full sm:max-w-md'>
      <Image
        alt='Messenger Logo'
        src={'/images/logo.png'}
        height={48}
        width={48}
        className='mx-auto w-auto'
      />
      <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
        Sign in to your account
      </h2>
    </div>
  )
}
