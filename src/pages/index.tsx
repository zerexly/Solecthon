import Image from 'next/image'
import { Inter } from 'next/font/google'
import C_Home from '@/components/Home/main';
import Navbar from '@/components/Scomponents/navbar';
import { useEffect } from 'react'
import Head from 'next/head';
// import '@/styles/cursor.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
 

  return (
    <><Head>
      <title>
        VCET SOLECTHON
      </title>
      {/*Meta Data */}
    </Head><main className=' overflow-hidden'>
        <Navbar />
        <div>
          <C_Home />
        </div>
      </main></>
  )
}
