import React, { useState } from 'react'
import './App.css'

const App = () => {
  // form states
  const[item,setitem] = useState('')
  const[amount,setamount] = useState(null)
  // expenses states
  const[bal,setbal] = useState(4500)
  const[expense, setexpenses] = useState(0)
  const[transaction,setTransaction] = useState([])

  const addtransaction = () => {
    if(amount < 0){
       setexpenses(prevexpense => { 
        const expense = prevexpense + (-1 * amount)
        setbal(bal => bal - expense)
        return expense;
    });
        
    }
    else{
          setbal(amount + bal)
    }
     setTransaction([...transaction,{item,amount}])
     setitem('')
     setamount('')
  }

  return (
     <>
   <center><h1>EXPENSE TRACKER</h1></center>
      <div className='app'>
         <div className='container'>
        <section className='expenses'>
             <center> <h3>Balance : {bal} </h3></center>
              <div className='incomeexpense'>
                  <p>Income <br></br><center style={{color:'green', fontWeight:'bold'}}>4500</center></p>
                  <p>Expense<br></br><center  style={{color:'darkred', fontWeight:'bold'}}>{expense}</center></p>
              </div>
        </section>
       <center> <h2>New Transaction</h2></center>
        <section className='userexpense'>
            Enter Expense<input type='text' value={item} onChange={(e) => setitem(e.target.value)}/>
            Enter Amount<input type='number' value={amount} onChange={(e) => setamount(Number(e.target.value))}/>
            <input id='btn' type='submit' value='Add expense' onClick={addtransaction}/>
        </section>
     </div>
     {/* transaction history records */}
     <div className='transactions'>
           <h3>Transaction history</h3>
           {/* display transaction */}
           {(transaction.length !=0) ? transaction.map((item,index) => <p key={index}>{item.item} {item.amount}</p> ) : <h4>No transaction</h4>}
     </div>
      </div>
     </>
  )
}

export default App