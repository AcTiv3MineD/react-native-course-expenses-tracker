import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ExpenseItem({expense}) {
    return (
        <Pressable>
            <View style={styles.container}>
                <View>
                    <Text style={[styles.textBase, styles.description]}>{expense.description}</Text>
                    <Text style={styles.textBase}>{expense.date.toString()}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amountText}>{expense.amount}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default ExpenseItem;

const styles = StyleSheet.create({
    container: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,

        // ANDROID
        elevation: 3,

        // IOS
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
    },
    textBase: {
        color: GlobalStyles.colors.primary50,
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold',
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    amountText: {
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold',
    },
})