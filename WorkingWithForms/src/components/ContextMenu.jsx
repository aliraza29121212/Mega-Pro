import React from 'react'

export default function ContextMenu({menuPosition , setMenuPosition, rowId,setExpenses}) {
  if(!menuPosition.left) return

  return (
    <div className="context-menu" style={menuPosition}>
      <div onClick={()=> {
        console.log("Edit")
        setMenuPosition({})
      }}>Edit</div>
      <div  onClick={()=> {
        console.log("Delete")
        setExpenses((prevState)=> prevState.filter(expense => expense.id !== rowId))
        setMenuPosition({})

      }}>Delete</div>
    </div>
  )
}