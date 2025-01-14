import { StyleSheet, View } from "react-native";
import Input from "./Input";

function ExpenseForm() {
    function amountChangedHandler() {
        //
    }

    function dateChangedHandler() {
        //
    }

    function descriptionChangedHandler() {
        //
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputsRow}>
                <Input
                    label="Amount"
                    textInputConfig={{
                        keyboardType : "decimal-pad",
                        onChangeText: amountChangedHandler,
                    }}
                />
                <Input
                    label="Date"
                    textInputConfig={{
                        placeholder: "YYYY-MM-DD",
                        onChangeText: dateChangedHandler,
                        maxLength: 10,
                    }}
                />
            </View>
            <Input
                label="Description"
                textInputConfig={{
                    multiline: true,
                    autoCorrect: false,
                    placeholder: "What you paid?",
                    onChangeText: descriptionChangedHandler,
                    maxLength: 255,
                }}
            />
        </View>
    )
}

export default ExpenseForm;

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});