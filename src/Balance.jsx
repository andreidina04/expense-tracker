import React, { useState, useEffect } from "react";
function Balance() {

    const [balance, setBalance] = useState(0)
    const [inputValue, setInputValue] = useState("")
    const [inputTransaction, setInputTransaction] = useState("")
    const [transaction, setTransaction] = useState([])
    const [costTransaction, setCostTransaction] = useState(0)
    const [category, setCategory] = useState("")
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {document.body.classList.toggle("dark", darkMode);}, [darkMode]);

    function EnterSum() {

        setBalance(balance + Number(inputValue))
        setInputValue(0);
    }

    function addTransactions() {
        if (inputTransaction.trim() === "") return;
        setTransaction([...transaction, {category: category, text: inputTransaction, amount: Number(costTransaction)}])
        setBalance(balance - Number(costTransaction))
        setInputTransaction("");
        setCostTransaction(0);
    }
    function removeTransaction(index) {
        const t = transaction[index]
        setBalance(balance + t.amount)
        setTransaction(transaction.filter((_,i) => i != index))
    }
    function setDark() {
        setDarkMode(!darkMode)
    }
    const totalSpend = transaction.reduce((acc, t) => acc + t.amount,0);

    return(
        <>
        <button onClick={setDark} className="dark-toggle">{darkMode ? '☀️' : '🌙'}</button>
        <h2 className="balance-text">Balance: <span style={{color: balance < 0 ? 'red' : '#50C878'}}>{balance.toFixed(2)}</span>$</h2>        
        <h3 className="total">Total: <span className="total-spend">{totalSpend}</span>$</h3>  
        <input className="input-money" type="number" placeholder="Add money" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>        
        <button onClick={EnterSum} className="button-1">Add money into account</button>
        <div className="container">
        <input type="text" placeholder="Enter transaction" value={inputTransaction} onChange={(e) => setInputTransaction(e.target.value)}/>
        <input type="number" placeholder="$" value={costTransaction} onChange={(e) => setCostTransaction(Number(e.target.value))}/>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select a category</option>
        <option value="food">Food</option>
        <option value="transport">Transport</option>
        <option value="shopping">Shopping</option>
        <option value="entertainment">Entertainment</option>
        <option value="diverse">Diverse</option></select>
        <button onClick={addTransactions}>Add Transaction</button>
        <ul>
        {transaction.map((t, index) => (<li key={index}><div className="transaction-list"><h4>Category:</h4><span className="categorie">{t.category}</span> <h4>Transaction:</h4><span className="transactie"></span> {t.text} - {t.amount}$<button onClick={() => removeTransaction(index)}>Remove Transaction</button></div></li>))}
        </ul> 
        </div>
        </>
    );   
}

export default Balance;