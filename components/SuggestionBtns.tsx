'use client'

import { Button } from "@/components/ui/button"


const SuggestionBtns = () => {
  return (
    <>
      <div className="flex justify-center mt-4  w-full max-w-md mb-5 buttonDiv">
        <Button variant="outline" className="px-4 py-2 rounded-md bg-[#4CAF50] text-[#F5F5F5] hover:bg-white hover:text-[#4CAF50]">
        Grilled Fish 
        </Button>
        <Button variant="outline" className="px-4 py-2 rounded-md bg-[#2196F3] text-[#F5F5F5] hover:bg-white hover:text-[#2196F3]">
        Vegetable Stir-Fry
        </Button>
        <Button variant="outline" className="px-4 py-2 rounded-md bg-[#FF9800] text-[#F5F5F5] hover:bg-white hover:text-[#FF9800]">
        Beef Tacos
        </Button>
        <Button variant="outline" className="px-4 py-2 rounded-md bg-[#9C27B0] text-[#F5F5F5] hover:bg-white hover:text-[#9C27B0]">
        Chicken Curry
        </Button>
        <Button variant="outline" className="px-4 py-2 rounded-md bg-[#673AB7] text-[#F5F5F5] hover:bg-white hover:text-[#673AB7]">
        Pasta Primavera
        </Button>
      </div>
    </>
  
  )
}

export default SuggestionBtns
