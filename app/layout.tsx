import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Next.js SSR with Supabase',
  description: 'Welcome to the Supabase integration demo!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="min-h-screen bg-gray-50">
          <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
              <a href="/" className="font-bold text-xl">Supabase Demo</a>
              <ul className="flex space-x-4">
                <li><a href="/" className="hover:text-gray-300">Home</a></li>
                <li><a href="/posts" className="hover:text-gray-300">Posts</a></li>
              </ul>
            </div>
          </nav>
          {children}
        </div>
      </body>
    </html>
  )
}
