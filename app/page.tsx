"use client"
import Image from "next/image";
import { useRouter } from 'next/navigation'

export default function Home() {
  const route = useRouter()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1>LANDING PAGE</h1>
     <button className='border-solid border-2 p-2 rounded-md hover:bg-slate-200' onClick={() => route.push('/dashboard')}>Go To Dash</button>
    </main>
  );
}
