import React, { useState } from 'react'
import './App.css'
import ExpensesForm from './components/ExpensesForm'
import ExpenseTable from './components/ExpenseTable'
import expenseData from './expenseData'

function App() {
  const [expenses,setExpenses] = useState(expenseData)
  return (
    <main>
      <h1>Track your Expense</h1>
      <div className="expense-tracker">
        <ExpensesForm setExpenses={setExpenses} />
        <ExpenseTable expenses={expenses} setExpenses={setExpenses}/>
      </div>
    </main>
  )
}

export default App
