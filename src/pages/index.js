"use client";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/Components/NavBar'
import Home from '@/Components/Home'
import Footer from '@/Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function index() {
  return (
 
<div> 
<NavBar/>
<Home/>
<Footer/>
</div>
  )
}
