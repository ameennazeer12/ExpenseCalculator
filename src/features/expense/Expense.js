import React, { useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ModalLoad } from '../../modals/ModalLoad';
import { ModalSave } from '../../modals/ModalSave';






import {
    add,
    remove,
    reset,
} from './expenseSlice';





 export const Expense = () => {
    const expenselist = useSelector(state => state.expense);
    const dispatch = useDispatch();
    const [desc, setDesc] = useState('')
    const [amt, setAmt] = useState(0)
    const [total, setTotal] = useState(0)
   





    const handleSubmit = (e) => {
        e.preventDefault()
        if ( desc !=='' && amt!==0) {
            dispatch(add({description:desc,amount:parseInt(amt, 10)}))
            setDesc('')
            setAmt(0)
        }

    }
    const handleRemove = (id) => {
        dispatch(remove(id))
    }

    const handleReset = () => {
        
        dispatch(reset())
    }

    useEffect(() => {
        let totalsum = 0
        if (expenselist){
            expenselist.map((expense) => totalsum = totalsum + expense.amount)
        }
        setTotal(totalsum)
    }, [expenselist])


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="desc">Description:  </label>
                    <input className='form-control' type="text" name='desc' id='desc' value={desc} onChange={(e) => setDesc(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="amt">Amount:  </label>
                    <input className='form-control' type="number" name='amt' id='amt' value={amt || ''} onChange={(e) => setAmt(e.target.value)}/> 
                </div>
                <button className='btn btn-primary m-3' type='submit' >ADD</button>
            </form>
        
        
          
            {expenselist.map((expense) => {
            return(
                <ul  key = {expense.id} className='list-group'>
                    <li key={expense.id} className='list-group-item'>{expense.description} -  ₹{expense.amount}</li>
                    <button className='btn btn-warning m-3' onClick={()=>handleRemove(expense.id)} >REMOVE</button>
                </ul>
            )
            })
            }
            
            <h4 className='h4'>Total Expense:  {total}</h4>
           
            <ModalLoad></ModalLoad>
            <ModalSave></ModalSave>

            <button className="btn btn-danger" onClick={handleReset}>RESET</button>

  
                
       
            
            
 
        </div>
    )
}


