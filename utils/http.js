import axios from "axios";
import Config from "react-native-config";

const BACKEND_URL = Config.API_URL;

export async function storeExpense(ExpenseData) {
    const response = await axios.post(
        `${BACKEND_URL}/expenses.json`, ExpenseData
    );

    return response.data.name;
}

export async function fetchExpenses() {
    const response = await axios.get(`${BACKEND_URL}/expenses.json`);
    const expenses = [];

    for (const key in response.data) {
        expenses.push({
            id: key,
            amount: response.data[key].amount,
            date: response.data[key].date,
            description: response.data[key].description,
        });
    }

    return expenses;
}

export async function updateExpense(id, ExpenseData) {
    await axios.put(
        `${BACKEND_URL}/expenses/${id}.json`, ExpenseData
    );
}

export async function deleteExpense(id) {
    await axios.delete(`${BACKEND_URL}/expenses/${id}.json`);
}