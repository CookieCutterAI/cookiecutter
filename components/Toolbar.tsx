'use client'
import React from "react";
import { useState } from "react"
import { type CoreMessage } from 'ai';
import { continueConversation } from '../app/actions';
import { readStreamableValue } from 'ai/rsc';
import { Input } from "./ui/input"
import SuggestionBtns from './SuggestionBtns'
const Toolbar = ({children}, ) => {

  const [messages, setMessages] = useState<CoreMessage[]>([]);
  const [input, setInput] = useState('');
  const [data, setData] = useState<any>();
  const [show, setShow] = useState(true)

  return (
    <div>
    
        <div className="flex flex-col items-center p-4 bg-[#F5F5F5] z-50 ">
        {/*<Navbar />*/}
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

        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#02c6f7,45%,#a4dcea,55%,#02c6f7)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" >
            Send
        </button>
        </form>
        <SuggestionBtns />
      </div>


    </div>
  )
}
export default Toolbar
