import React, { useState } from 'react'
import { Button } from './Button'
const SplitBillForm = ({selectedFriend}) => {
  const[billValue,setBillValue]=useState(0);
  const[expense,setExpense] = useState(0);
 
  const handleSetBillValue = (e)=>{
    setBillValue(e.target.value);
  }

  const handleSetExpense = (e) =>
  {
    const val = Number(billValue) - Number(e.target.value);
    setExpense(val);
  }


const handleFormData= (e)=>
{
  e.preventDefault(); // Prevents the default page refresh
}


  return (
    <div className="half-div2">
                <h3>
                  Split the Bill with {selectedFriend.name}
                  </h3>
                <form onSubmit={handleFormData}>
                  
                  <ul>
                    <li>
                    <label >Bill Value</label>
                    <input type='text' onChange={handleSetBillValue} value={billValue}></input>
                    </li>
                    <li>
                      <label >Your Expense</label>
                    <input type='text' onChange={handleSetExpense}></input>
                    </li>
                    <li>
                     <label htmlFor="">{selectedFriend.name} expense 
                      </label> 
                      <input type='text' disabled value={expense}></input>
                    </li>
                    <li>
                      <label>Who's paying the bill</label>
                      <select>
                        <option>Select Payer</option>
                        <option >You</option>
                        <option>{selectedFriend.name}</option>
                      </select>

                    </li>
                    <li>
                     <Button type="submit">Split Bill</Button>
                    </li>
                  </ul>
                </form>
    
    
                
    
                {/* <Button> Submit </Button> */}
    </div>
  )
}

export default SplitBillForm
