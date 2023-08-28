import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mask Cursor Effect',
  description: 'Mask cursor effect',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
