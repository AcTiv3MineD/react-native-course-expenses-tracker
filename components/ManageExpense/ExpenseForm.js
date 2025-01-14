import { StyleSheet, View } from "react-native";
import Input from "./Input";
import { useState } from "react";

function ExpenseForm({onCancel, onDelete, onSubmit, action}) {
    const [inputValues, setInputValues] = useState({
        amount: '',
        date: '',
        description: '',
    });

    function inputChangedHandler(identifier, value) {
        setInputValues((currentExpenseValues) => {
            return {
                ...currentExpenseValues,
                [identifier]: value,
            }
        });
    }

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.inputsRow}>
                    <Input
                        style={styles.fullWidthInput}
                        label="Amount"
                        textInputConfig={{
                            keyboardType : "decimal-pad",
                            onChangeText: inputChangedHandler.bind(this, 'amount'),
                            value: inputValues.amount,
                        }}
                    />
                    <Input
                        label="Date"
                        style={styles.fullWidthInput}
                        textInputConfig={{
                            placeholder: "YYYY-MM-DD",
                            onChangeText: inputChangedHandler.bind(this, 'date'),
                            maxLength: 10,
                            value: inputValues.date,
                        }}
                    />
                </View>
                <Input
                    label="Description"
                    textInputConfig={{
                        multiline: true,
                        autoCorrect: false,
                        placeholder: "What you paid?",
                        onChangeText: inputChangedHandler.bind(this, 'description'),
                        maxLength: 255,
                        value: inputValues.description,
                    }}
                />
            </View>
        </View>
    )
}

export default ExpenseForm;

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    fullWidthInput: {
        flex: 1,
    },
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});