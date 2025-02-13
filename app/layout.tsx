import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavigationBar from './components/navigationBar/page'
import Footer from './components/footer/page'
import { UserProvider } from "./context/userContext"; // Import the provider

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lakshmi Ayurveda',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
      <UserProvider>
        <NavigationBar />
          {children}
          <Footer />
      </UserProvider>
        
        
        </body>
    </html>
  )
}
