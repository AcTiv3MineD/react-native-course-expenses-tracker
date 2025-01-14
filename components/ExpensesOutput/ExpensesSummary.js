import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ExpensesSummary({periodName, expenses}) {
    const expensesTotal = expenses.reduce((acc, expense) => acc + expense.amount, 0);

    return (
        <View style={styles.container}>
            <Text style={styles.period}>{periodName}</Text>
            <Text style={styles.total}>${expensesTotal.toFixed(2)}</Text>
        </View>
    )
}

export default ExpensesSummary;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: GlobalStyles.colors.primary50,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    period: {
        fontSize: 16,
        color: GlobalStyles.colors.primary400,
    },
    total: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary500,
    }
});