import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import About from '@/components/About'
import Skill from '@/components/Skill'
import Projects from '@/components/Projects'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>portpolio</title>
        <meta name="description" content="portpolio" />
      </Head>
      <Navbar/>
      <Main/>
      <About/>
      <Skill/>
      <Projects/>
    </div>
  )
}
