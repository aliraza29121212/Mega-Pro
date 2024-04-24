import React, { useState } from "react";
import "./App.css";
import ExpensesForm from "./components/ExpensesForm";
import ExpenseTable from "./components/ExpenseTable";
import expenseData from "./expenseData";

function App() {
  const [expenses, setExpenses] = useState(expenseData);
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });
  const [editingRowId, setEditingRowId] = useState("");
  const [menuPosition, setMenuPosition] = useState({});

  return (
    <main>
      <h1>Track your Expense</h1>
      <div className="expense-tracker">
        <ExpensesForm
          setExpenses={setExpenses}
          expense={expense}
          setExpense={setExpense}
          editingRowId={editingRowId}
          setMenuPosition={setMenuPosition}
        />
        <ExpenseTable
          expenses={expenses}
          setExpenses={setExpenses}
          setExpense={setExpense}
          setEditingRowId={setEditingRowId}
          setMenuPosition={setMenuPosition}
          menuPosition={menuPosition}
        />
      </div>
    </main>
  );
}

export default App;
