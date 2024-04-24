import React from "react";

export default function ContextMenu({
  menuPosition,
  setMenuPosition,
  rowId,
  setExpenses,
  expenses,
  setExpense,
  setEditingRowId,
}) {
  if (!menuPosition.left) return;

  return (
    <div className="context-menu" style={menuPosition}>
      <div
        onClick={() => {
          console.log("Edit");
          const { title, category, amount } = expenses.find(
            (expense) => expense.id === rowId
          );
          setExpense({ title, category, amount });
          setEditingRowId(rowId);
        }}
      >
        Edit
      </div>

      <div
        onClick={() => {
          console.log("Delete");
          setExpenses((prevState) =>
            prevState.filter((expense) => expense.id !== rowId)
          );
          setMenuPosition({});
        }}
      >
        Delete
      </div>
    </div>
  );
}
