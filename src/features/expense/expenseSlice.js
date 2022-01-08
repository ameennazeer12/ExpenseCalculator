import { createSlice } from "@reduxjs/toolkit";



export const expenseSlice = createSlice(
    {
        name: 'expense',
        initialState: [],
        reducers: {
            add: (state,action) => {
                const {description,amount} = action.payload
                state.unshift({id: new Date().getTime(),description:description,amount:amount})
            },
            remove: (state,action) => {
                const id = action.payload
                const removeindex = state.findIndex((expense) => expense.id === id )
                if (removeindex !== -1){
                    state.splice(removeindex,1)
                }
            },
            reset: (state) => {
                state.length = 0
        
            },
            load: (state,action) => {
                const savedList = action.payload
                state.length = 0
                savedList.map((expense) => state.push(expense))
            }
        }

    }
)
export const { add,remove,reset,load } = expenseSlice.actions;


export default expenseSlice.reducer;