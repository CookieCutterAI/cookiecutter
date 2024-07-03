"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useChat } from 'ai/react'
import SuggestionBtns  from '@/components/SuggestionBtns'

export function Interface() {
  

  const { messages, input, handleInputChange, handleSubmit, data } = useChat();
  const [ChatText, setChatText] = useState(false)
  return (
    <div className="flex flex-col h-screen bg-[#F5F5F5] text-[#333]">
      <header className="bg-[#F5F5F5] p-4  flex justify-between items-center">
        <img src="logo-dark-removebg-preview.png" className="w-36 h-36 rounded-full" alt="logo"/>
        <div className="flex gap-2 justify-center hidden">
          <Button variant="outline" className="px-4 py-2 rounded-md bg-[#333] text-[#F5F5F5]">
            Pricing
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" className="px-4 py-2 rounded-md bg-[#333] text-[#F5F5F5]">
              Login
            </Button>
            <Button variant="outline" className="px-4 py-2 rounded-md bg-[#333] text-[#F5F5F5]">
              Signup
            </Button>
          </div>
        </div>

      </header>
      <div className="flex flex-col items-center p-4 bg-[#F5F5F5]">
        <form onSubmit={handleSubmit} className="flex justify-center items-center w-full max-w-md mb-5">           
          <Input
            type="text"
            placeholder="Tell me more about yourself :)"
            value={input}
            onChange={handleInputChange}
            className="flex-1 mr-2 max-w-[400px] shadow-[0_0_10px_rgba(110,255,110,0.5)] h-14 w-14"
          />
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#02c6f7,45%,#a4dcea,55%,#02c6f7)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={() => setChatText(true)}>
            Send
        </button>
         {/* <Button type="submit" className="text-[#F5F5F5] bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gray-100 " onClick={() => setChatText(true)}>

          </Button> */}
        </form>
        <SuggestionBtns />
      </div>
      <main className="flex-1 overflow-auto p-4">
        <div className="max-w-[70em] mx-auto shadow-xl rounded-lg bg-[#F5F5F5] p-6 textArea">
          <div className="grid gap-4">
            {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>}*/}         
          {messages.map(m => (
            <div key={m.id} className="whitespace-pre-wrap text-xl">
              {m.role === 'user' ? 'User: ' : 'Your Buddy: '}
              {m.content}
            </div>
          ))}

          </div>
        </div>
      </main>
    </div>
  )
}
