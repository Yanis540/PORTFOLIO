import './globals.css'
import { Inter } from 'next/font/google'
import clsx from 'clsx'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Yanis",
  description: 'Yanis tabellout personnal portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, ' text-whitish scrollbar-thin scrollbar-thumb-greenish-blue scrollbar-track-navy scrollbar-rounded-md relative')}>
        <>
          {children}
        </>
      </body>
    </html>
  )
}
