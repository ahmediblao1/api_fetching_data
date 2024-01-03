import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'demp blog app with next js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className='flex justify-center items-center gap-5'>
      <Link href="/">Home</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/articales">Articales</Link>
      </div>
      {children}
      </body>
    </html>
  )
}
