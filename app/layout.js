import { Inter } from "next/font/google";
import "./globals.css";
import {AuthProvider} from "@propelauth/nextjs/client";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Bitcamp 24',
  description: 'Created by Ramith and Mathew',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
      <AuthProvider authUrl={process.env.NEXT_PUBLIC_AUTH_URL}>
			  {children}
		  </AuthProvider>
      </body>
      
    </html>
  )
}

