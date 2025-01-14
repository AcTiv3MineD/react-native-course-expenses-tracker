import { Text, View } from "react-native";

function ExpensesSummary({periodName, expenses}) {
    const expensesTotal = expenses.reduce((acc, expense) => acc + expense.amount, 0);

    return (
        <View>
            <Text>{periodName}</Text>
            <Text>${expensesTotal.toFixed(2)}</Text>
        </View>
    )
}

export default ExpensesSummary;