import { Metadata } from 'next'
import Login from '.'

export const metadata: Metadata = {
  title: 'Login',
}

export default async function LoginPage() {
  return (
    <>
      <Login />
    </>
  )
}