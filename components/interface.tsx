"use client"

import { useState } from "react"
import { type CoreMessage } from 'ai';
import { continueConversation } from '@/app/actions';
import { readStreamableValue } from 'ai/rsc';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
//import { useChat } from 'ai/react'
import Image from 'next/image'
export const dynamic = 'force-dynamic';
export const maxDuration = 30;
import Toolbar from "./Toolbar";
import Link from "next/link";
export function Interface() {
  const [messages, setMessages] = useState<CoreMessage[]>([]);
  const [input, setInput] = useState('');
  const [data, setData] = useState<any>();
  //const { messages, input, handleInputChange, handleSubmit, data } = useChat();
  return (
    <div className="flex flex-col h-screen bg-[#0c0c14] text-[#333]">
      <header className="p-4 flex justify-between items-center">
        <Image src="/logo-dark-removebg-preview.png" className="w-36 h-36 rounded-full" alt="logo" width={100} height={100}/>
        <div className="gap-2 justify-center ">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">

            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#5204f9_0%,#adaed5_50%,#5204f9_100%)] " />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[##6c6c9b] px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              <Link href="/login">Get Started </Link>
            </span>
          </button>
        </div>
      </header>
      <div className="flex flex-col items-center p-4 z-50 ">
        <form onSubmit={async e => {
          e.preventDefault();
          const newMessages: CoreMessage[] = [
            ...messages,
            { content: input, role: 'user' },
          ];

          setMessages(newMessages);
          setInput('');

          const result = await continueConversation(newMessages);
          setData(result.data);

          for await (const content of readStreamableValue(result.message)) {
            setMessages([
              ...newMessages,
              {
                role: 'assistant',
                content: content as string,
              },
            ]);
          }
        }} 
          className="flex justify-center items-center w-full max-w-md mb-5">           
          <Input
            type="text"
            placeholder="Tell me more about yourself :)"
            value={input}
            onChange={e => setInput(e.target.value)}
            className="flex-1 mr-2 max-w-[400px] shadow-[0_0_10px_rgba(110,255,110,0.5)] h-14 w-14"
          />

        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#b1b5f9,45%,#d1d3fc,55%,#b1b5f9)] bg-[length:200%_100%] px-6 font-medium text-gray-950 dark:text-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" >
            Send
        </button>
        </form>
      </div>

      <main className="flex-1 overflow-auto p-4 ">
        <div className="max-w-[70em] mx-auto rounded-lg bg-[#0c0c14] p-6 textArea text-gray-50">
          <div className="grid gap-4">
            {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
            {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>}*/}         
          {messages.map((m, i) => (
            <div key={i} className="whitespace-pre-wrap text-2xl ">
              {m.role === 'user' ? 'User: ' : 'Cookie: '}
              {m.content as string}
            </div>
          ))}

          </div>
        </div>
      </main>
      </div>
  )
}
