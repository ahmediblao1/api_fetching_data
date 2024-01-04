import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import img from './vlogo.png'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'demp blog app with next js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className='flex fixed mb-40 flex-col justify-start items-center gap-3 bg-[#ff8800] h-[100vh] w-56'>
        <div >
        <Image src={img} alt="Picture of the logo" />
        </div>
      <Link href="/">Home</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/">Articales</Link>
      <Link href="/">post</Link>
      <Link href="/">profile</Link>
      </div>
      {children}
      </body>
    </html>
  )
}
