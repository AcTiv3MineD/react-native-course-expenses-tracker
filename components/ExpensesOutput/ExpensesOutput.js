import { View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'New Shoes',
        amount: 99.99,
        date: new Date(2021, 7, 14),
    },
    {
        id: 'e2',
        description: 'Groceries',
        amount: 10.99,
        date: new Date(2021, 7, 15),
    },
    {
        id: 'e3',
        description: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 7, 16),
    },
    {
        id: 'e4',
        description: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 7, 17),
    },
];

function ExpensesOutput({expenses, expensesPeriod}) {
    return (
        <View>
            <ExpensesSummary periodName={expensesPeriod} expenses={DUMMY_EXPENSES} />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View> 
    )
}

export default ExpensesOutput;