import Image from 'next/image'
import styles from './page.module.css'
import { auth } from '@/src/lib/auth'
import { LoginButton, LogoutButton } from './AuthButtons'
import './globals.css'

export default async function Home() {
  const session = await auth
  return (
    <div className="mx-auto py-4 max-w-lg">
      <h1>
        {session?.user 
        ? "Authentificated" + session?.user.email
      : "Not Authentificated"}
      </h1>

      <div> 
        {!session?.user ? (
          <LoginButton/>
        ) : <LogoutButton/> }
      </div>
    </div>
  )
}
