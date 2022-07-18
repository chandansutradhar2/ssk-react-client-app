import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Sidebar } from "./Sidebar/Sidebar";
import { Header } from "./Header/Header";
import AddExpense from "./Expenses/AddExpense/AddExpense";
import ExpenseList from "./Expenses/ExpenseList/ExpenseList";
import axios from "axios";

function App() {
  //todo: db call to fetch data

  useEffect(()=>{
    axios.get('http://localhost:3001/expenses/list').then(r=>{

    }).catch(err=>{
  
    })
  },[])
  
  console.log('app loaded');
  let expList:any[]=[];
  const [expenses,setExpenses]=useState(expList);

  const handleExp=(expense:any)=>{
    console.log(expense);
    const cloneExpenses=[...expenses];
    cloneExpenses.push({amount:expense.amount,expDate:expense.expDate,category:expense.category});
    setExpenses(cloneExpenses);

  }

  return (
    <div className="container">
      <h1 >Finance Planner App</h1>
      <AddExpense handleExp={handleExp} />
      <ExpenseList expenses={expenses}/>
    </div>
  );
}

export default App;
