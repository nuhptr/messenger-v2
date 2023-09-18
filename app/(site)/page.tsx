import AuthForm from './components/auth-form'
import AuthHeader from './components/auth-header'

export default function Home() {
  return (
    <div className='min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100'>
      <AuthHeader />
      <AuthForm />
    </div>
  )
}
