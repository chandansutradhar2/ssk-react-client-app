import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { Button, FormControl, MenuItem } from "@mui/material";
import "./AddExpense.css";

function AddExpense(props: any) {

  console.log('Add Expense  loaded')

  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(-100);
  const [expDate, setExpDate] = useState(new Date().toLocaleDateString());

  const expenseCategories = [
    "Grocerries",
    "Entertainment",
    "Recharge",
    "Loan",
    "EMI",
    "Travel",
    "Misc",
  ];

  function onAddExpense() {
    
    return amount<=0?alert('amount cannot be less than 0'):
    props.handleExp({
      amount: amount,
      expDate: expDate,
      category: category,
    });
  }

  return (
    <div style={{ width: "100vw", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "450px", textAlign: "center" }}>
        <h4>Add Expenses</h4>
        <FormControl fullWidth className="form-control">
          <TextField
            id="outlined-basic"
            label="Expense Amount"
            variant="outlined"
            value={amount}
            onChange={(ev) => setAmount(parseInt(ev.target.value)||0)}
          />
        </FormControl>
        <FormControl fullWidth className="form-control">
          <TextField
            id="outlined-basic"
            label="Expense Date"
            placeholder="DD/MM/YYYY"
            variant="outlined"
            value={expDate}
            onChange={(ev) => setExpDate(ev.target.value)}

          />
        </FormControl>
        <FormControl fullWidth className="form-control">
          <InputLabel id="demo-simple-select-label">
            Expense Category
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Select Category"
            value={category}
            onChange={(ev) => setCategory(ev.target.value)}
          >
            {expenseCategories.map((item, idx) => {
              return (
                <MenuItem key={idx} value={item}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          style={{ marginTop: "1rem" }}
          onClick={onAddExpense}
        >
          Add Expenses
        </Button>
      </div>
    </div>
  );
}

export default AddExpense;
