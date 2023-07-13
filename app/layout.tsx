import './globals.css'
import type { Metadata } from 'next'
import {Comfortaa, Inter} from 'next/font/google'
import TheHeader from "@/app/components/TheHeader";
import TheFooter from "@/app/components/TheFooter";

const font = Comfortaa({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TODO list',
  description: 'Generated for test task',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
      <TheHeader />
        {children}
      <TheFooter />
      </body>
    </html>
  )
}
