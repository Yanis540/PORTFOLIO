import './globals.css'
import { Inter } from 'next/font/google'
import clsx from 'clsx'
import { Metadata } from 'next'
const inter = Inter({ subsets: ['latin'] })

export const metadata:Metadata = {
  title: "Yanis",
  description: 'Yanis tabellout personnal portfolio',
  icons:{
    icon:'/kali.jpg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, ' max-w-[100vw] text-whitish scrollbar-thin scrollbar-thumb-greenish-blue scrollbar-track-navy scrollbar-rounded relative')}>
        <>
          {children}
        </>
      </body>
    </html>
  )
}
