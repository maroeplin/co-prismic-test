
import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'
import './globals.css'

import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })

const nunito = Nunito({ subsets: ['latin'], display: 'swap', variable: '--font-nunito' })

import { createClient } from '@/prismicio'
import { create } from 'domain'

import Header from '@/components/Header'

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  try {
    const settings = await client.getSingle("settings");
    
    if (settings) {
      return {
        title: settings.data.site_title || "C/O Vienna",
        description: settings.data.meta_description || "C/O Vienna Meta Description",
        openGraph: {
          images: [settings.data.og_image.url || ""],
        },
      };
    } else {
      // Handle the case where no document was found
      // You can return a default value or take appropriate action here
    }
  } catch (error) {
    console.error("Error fetching settings:", error);
    // Handle the error here
  }

  // Default return value if there was an error
  return {
    title: "C/O Vienna",
    description: "C/O Vienna Meta Description",
    openGraph: {
      images: [""],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={clsx(inter.variable, nunito.variable)}>
      <body>
      <Header />
      {children}
      <footer>Footer</footer>
      </body>
    </html>
  )
}
