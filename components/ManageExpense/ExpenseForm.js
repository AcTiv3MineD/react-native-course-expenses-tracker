import { StyleSheet, View } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from '../../components/UI/Button';
import IconButton from '../../components/UI/IconButton';
import { GlobalStyles } from "../../constants/styles";

function ExpenseForm({onCancel, onDelete, onSubmit, action, expense}) {
    const [inputValues, setInputValues] = useState({
        amount: expense.amount ? expense.amount.toString() : '',
        date: expense.amount ? expense.date.toString() : '',
        description: expense.description ? expense.description.toString() : '',
    });

    function inputChangedHandler(identifier, value) {
        setInputValues((currentExpenseValues) => {
            return {
                ...currentExpenseValues,
                [identifier]: value,
            }
        });
    }

    function submitHandler() {
        const expenseData = {
            amount: parseFloat(inputValues.amount),
            date: inputValues.date,
            description: inputValues.description,
        }

        onSubmit(expenseData);
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
            <View>
                <View style={styles.buttonsContainer}>
                    <View>
                    <Button mode='flat' onPress={onCancel}>
                        Cancel
                    </Button>
                    </View>
                    <View>
                    <Button onPress={submitHandler}>{action === 'manage' ? 'Update' : 'Add'}</Button>
                    </View>
                    {
                    action == 'manage' &&
                    <View>
                        <IconButton
                        name="trash"
                        color={GlobalStyles.colors.error500} 
                        size={36}
                        onPress={onDelete}
                        />
                    </View>
                    }
                </View>
            </View>
        </View>
    )
}

export default ExpenseForm;

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 4,
      borderRadius: 8,
      marginTop: 16,
    },
    fullWidthInput: {
        flex: 1,
    },
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});