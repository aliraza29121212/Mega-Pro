import React, { useState } from "react";

function ExpensesForm({
  setExpenses,
  setExpense,
  expense,
  editingRowId,
  setEditingRowId,
  setMenuPosition,
}) {
  // const [title,setTitle]= useState('');
  // const [category,setCategory]= useState('');
  // const [amount,setAmount]= useState('');

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!expense.title || !expense.category || !expense.amount) {
      setError("Please fill all the form fields");
    } else {
      if (editingRowId) {
        setExpenses((prevState) =>
          prevState.map((prevExpense) => {
            if (prevExpense.id === editingRowId) {
              setExpense({
                title: "",
                category: "",
                amount: "",
              });
              setMenuPosition({});
              return { ...expense, id: editingRowId };
            }
            return prevExpense;
          })
        );

        setEditingRowId("");

        return;
      }

      setExpenses((prevState) => [
        ...prevState,
        { ...expense, id: crypto.randomUUID() },
      ]);
      setExpense({
        title: "",
        category: "",
        amount: "",
      });
    }
    // const expense = {title,category,amount,id: crypto.randomUUID}
    // setExpenses((prevState)=>[...prevState,expense])
    // setTitle("");
    // setCategory("")
    // setAmount("")

    // const expense= {...getFormData(e.target),id: crypto.randomUUID()}
    // setExpenses((prevState)=> [...prevState, expense])
    // e.target.reset()
  };

  // const getFormData =(form)=>{
  //     const formData = new FormData(form)
  // const data = {}
  // for (const[key,value] of formData.entries()){
  //     data[key] = value
  // }
  // return data

  // }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <>
      <div style={{ display: "block" }}>
        <h3 style={{ color: "red" }}>{error}</h3>

        <form className="expense-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              value={expense.title}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={expense.category}
              onChange={(e) =>
                setExpense((prevState) => ({
                  ...prevState,
                  category: e.target.value,
                }))
              }
            >
              <option value="" hidden>
                Select Category
              </option>
              <option value="grocery">Grocery</option>
              <option value="clothes">Clothes</option>
              <option value="bills">Bills</option>
              <option value="education">Education</option>
              <option value="medicine">Medicine</option>
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="amount">Amount</label>
            <input
              id="amount"
              name="amount"
              type="number"
              value={expense.amount}
              onChange={(e) =>
                setExpense((prevState) => ({
                  ...prevState,
                  amount: e.target.value,
                }))
              }
            />
          </div>
          <button className="add-btn">{editingRowId ? "Save" : "Add"}</button>
        </form>
      </div>
    </>
  );
}

export default ExpensesForm;
