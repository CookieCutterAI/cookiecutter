/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/L7XHtLbhUi9
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useChat } from 'ai/react'
import OpenAI from "openai";

export function Interface() {
  
  const [chatComp, setChatComp] = useState()

  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });

  const AiChat = async () => {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant." }],
      model: "gpt-4",
    });

    setChatComp(completion.choices[0])
    return completion.choices[0]
  }



  const { messages, input, handleInputChange, handleSubmit, data } = useChat();
  //const [messages, setMessages] = useState([
  //  {
  //    id: 1,
  //    type: "bot",
  //    text: "Hello! I am your personal recipe assistant. How can I help you today?",
  //  },
  //])
  //const [inputValue, setInputValue] = useState("")
  //const handleInputChange = (e) => {
  //  setInputValue(e.target.value)
  //}
  //const handleSubmit = (e) => {
  //  e.preventDefault()
  //  if (inputValue.trim() !== "") {
  //    const newMessage = {
  //      id: messages.length + 1,
  //      type: "user",
  //      text: inputValue,
  //    }
  //    setMessages([...messages, newMessage])
  //    setInputValue("")
  //    generateResponse(inputValue)
  //  }
  //}
  //const generateResponse = (query) => {
  //  const recipeResponse = {
  //    id: messages.length + 1,
  //    type: "bot",
  //    text: `Based on your query "${query}", here is a recipe suggestion: Grilled Salmon with Lemon Dill Sauce. This healthy and delicious meal is perfect for a summer evening. Would you like me to provide the full recipe details?`,
  //  }
  //  setMessages([...messages, recipeResponse])
  //}
  return (
    <div className="flex flex-col h-screen bg-[#F5F5F5] text-[#333]">
      <header className="bg-[#F5F5F5] p-4 shadow flex justify-between items-center backdrop-blur-sm bg-white/75">
        <h1 className="text-2xl font-bold text-[#333]">Recipe Assistant</h1>
        <div className="flex gap-2 justify-center">
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
        <form onSubmit={handleSubmit} className="flex justify-center items-center w-full max-w-md">           
          <Input
            type="text"
            placeholder="Ask me for a recipe..."
            value={input}
            onChange={handleInputChange}
            className="flex-1 mr-2 max-w-[400px] shadow-[0_0_10px_rgba(110,255,110,0.5)] h-12"
          />
          <Button type="submit" className="bg-[#333] text-[#F5F5F5]">
            Send
          </Button>
        </form>
        <div className="flex justify-center mt-4 gap-2 w-full max-w-md">
          <Button variant="outline" className="px-4 py-2 rounded-md bg-[#4CAF50] text-[#F5F5F5]">
            Grilled Fish 
          </Button>
          <Button variant="outline" className="px-4 py-2 rounded-md bg-[#2196F3] text-[#F5F5F5]">
            Vegetable Stir-Fry
          </Button>
          <Button variant="outline" className="px-4 py-2 rounded-md bg-[#FF9800] text-[#F5F5F5]">
            Beef Tacos
          </Button>
          <Button variant="outline" className="px-4 py-2 rounded-md bg-[#9C27B0] text-[#F5F5F5]">
            Chicken Curry
          </Button>
          <Button variant="outline" className="px-4 py-2 rounded-md bg-[#673AB7] text-[#F5F5F5]">
            Pasta Primavera
          </Button>
        </div>
      </div>
      <main className="flex-1 overflow-auto p-4">
        <div className="max-w-md mx-auto shadow-lg rounded-lg bg-[#F5F5F5] p-6">
          <div className="grid gap-4">
            {/*              {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
              {messages.map(m => (
                <div key={m.id} className="whitespace-pre-wrap">
                  {m.role === 'user' ? 'User: ' : 'AI: '}
                  {m.content}
                </div>
              ))} */}

          {messages.map(m => (
            <div key={m.id} className="whitespace-pre-wrap">
              {m.role === 'user' ? 'User: ' : 'AI: '}
              {m.content}
            </div>
          ))}

          </div>
        </div>
      </main>
    </div>
  )
}
