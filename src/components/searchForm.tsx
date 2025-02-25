"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function SearchForm() {
const [searchText, setSearchText] = useState('')
const router = useRouter();

    const handleSubmit= (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // console.log('searching events...') 
        if(!searchText) return;  
        router.push(`/events/${searchText}`)
      } 
  return (
    <form onSubmit={handleSubmit}
         className="w-full sm:w-[580px]"
        action="">
            <input className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition focus:bg-white/10 focus:ring-2 "
            type="text" placeholder="search events in any city... " 
            spellCheck={false}
            onChange={(e) => setSearchText(e.target.value)} 
            value={searchText} 
            />
        </form> 
  )
}
