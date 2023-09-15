'use client'

import { useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

import Input from '@/app/components/inputs/input'

type Variant = 'LOGIN' | 'REGISTER'

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>('LOGIN')
  const [loading, setIsLoading] = useState<boolean>(false)

  const toogleVariant = useCallback(() => {
    if (variant === 'LOGIN') setVariant('REGISTER')
    else setVariant('LOGIN')
  }, [variant])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    if (variant === 'REGISTER') {
      // Axios Register
    }

    if (variant === 'LOGIN') {
      // NextAuth Signin
    }
  }

  const socialAction = (action: string) => {
    setIsLoading(true)

    // NextAuth Social Signin
  }

  return (
    <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
      <div className='bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10'>
        {/* Form */}
        <form className='space-y-8' onSubmit={handleSubmit(onSubmit)}>
          {variant === 'REGISTER' && (
            <Input id='name' label='Name' register={register} errors={errors} />
          )}
          <Input
            id='email'
            label='Email Address'
            type='email'
            register={register}
            errors={errors}
          />
          <Input
            id='password'
            label='Password'
            type='password'
            register={register}
            errors={errors}
          />
        </form>
      </div>
    </div>
  )
}

export default AuthForm
