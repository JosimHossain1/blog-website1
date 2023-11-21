import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar/>
      
      <h1 className='dark:text-green-300'>Hello DarkMode</h1>
    </main>
  )
}
