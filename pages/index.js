import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Teslo | Tesla Clone with Next.js and Tailwind</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.cdnfonts.com/css/gotham" rel="stylesheet" />
      </Head>
      <Navbar />
      <Hero />
    </>
  )
}
