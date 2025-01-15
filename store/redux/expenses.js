import { createSlice } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
    name: 'expenses',
    initialState: {
        expenses: [],
    },

    reducers: {
        addExpense: (state, action) => {
            state.expenses.push(action.payload);
        },
        deleteExpense: (state, action) => {
            state.expenses = state.expenses.filter(expense => expense.id !== action.payload);
        },
        setExpenses: (state, action) => {
            state.expenses = action.payload.reverse();
        },
        updateExpense: (state, action) => {
            state.expenses = state.expenses.map(expense => {
                if(expense.id === action.payload.id) {
                    return action.payload;
                }
                return expense;
            });
        },
    },
});

export const addExpense = expensesSlice.actions.addExpense;
export const deleteExpense = expensesSlice.actions.deleteExpense;
export const setExpenses = expensesSlice.actions.setExpenses;
export const updateExpense = expensesSlice.actions.updateExpense;
export default expensesSlice.reducer;