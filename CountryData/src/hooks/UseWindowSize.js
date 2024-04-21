import { useState,useEffect } from "react"

export function useWnidowSize(){
    const [width,setWidth]= useState('')
useEffect(() => {
window.addEventListener('resize', ()=>{
  setWidth(window.innerWidth)
  console.log(window.innerWidth)
})

}, [])

return width
}