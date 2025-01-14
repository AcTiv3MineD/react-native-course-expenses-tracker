import { createSlice } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
    name: 'expenses',
    initialState: {
        expenses: [
            {
                id: 'e1',
                description: 'New Shoes',
                amount: 99.99,
                date: '2021-05-05',
            },
            {
                id: 'e2',
                description: 'Book 1',
                amount: 45.67,
                date: '2023-05-05',
            },
            {
                id: 'e3',
                description: 'Fruits',
                amount: 12.00,
                date: '2024-12-31',
            },
            {
                id: 'e4',
                description: 'Clothing',
                amount: 99.99,
                date: '2025-01-13',
            },
            {
                id: 'e5',
                description: 'Box',
                amount: 1.99,
                date: '2025-01-12',
            },
            {
                id: 'e6',
                description: 'New Shoes',
                amount: 99.99,
                date: '2021-05-05',
            },
            {
                id: 'e7',
                description: 'Item',
                amount: 122.9,
                date: '2025-07-09',
            },
            {
                id: 'e8',
                description: 'Item 2',
                amount: 99.99,
                date: '2021-05-05',
            },
            {
                id: 'e9',
                description: 'Item 3',
                amount: 19,
                date: '2025-01-08',
            },
        ],
    },

    reducers: {
        addExpense: (state, action) => {
            state.expenses.push(action.payload);
        },
        deleteExpense: (state, action) => {
            state.expenses = state.expenses.filter(expense => expense.id !== action.payload);
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
export const updateExpense = expensesSlice.actions.updateExpense;
export default expensesSlice.reducer;