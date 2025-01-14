import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from '../../components/UI/Button';
import IconButton from '../../components/UI/IconButton';
import { GlobalStyles } from "../../constants/styles";

function ExpenseForm({onCancel, onDelete, onSubmit, action, expense}) {
    const [inputs, setInputs] = useState({
        amount: {
            value: expense.amount ? expense.amount.toString() : '',
            isValid: !!expense,
        },
        date: {
            value: expense.date ? expense.date.toString() : '',
            isValid: !!expense,
        },
        description: {
            value: expense.description ? expense.description.toString() : '',
            isValid: !!expense,
        }
    });

    function inputChangedHandler(identifier, value) {
        setInputs((currentExpenseValues) => {
            return {
                ...currentExpenseValues,
                [identifier]: {value, isValid: true},
            }
        });
    }

    function inputErrorHandler(identifier, message) {
        if(inputs[identifier].isValid) {
            return;
        }

        return <Text style={styles.inputErrorText}>{message}</Text>
    }

    function submitHandler() {
        const expenseData = {
            amount: parseFloat(inputs.amount.value),
            date: inputs.date.value,
            description: inputs.description.value,
        }

        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = new Date(expenseData.date).toString() !== 'Invalid Date';
        const descriptionIsValid = expenseData.description.trim().length > 0 && expenseData.description.trim().length <= 255;

        if(!amountIsValid || !dateIsValid || !descriptionIsValid) {
            setInputs((currentExpenseInputs) => {
                return {
                    amount: {value: currentExpenseInputs.amount.value, isValid: amountIsValid},
                    date: {value: currentExpenseInputs.date.value, isValid: dateIsValid},
                    description: {value: currentExpenseInputs.description.value, isValid: descriptionIsValid},
                }
            })

            return;
        }

        onSubmit(expenseData);
    }

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.inputsRow}>
                    <View style={styles.input}>
                        <Input
                            hasError={!inputs.amount.isValid}
                            label="Amount"
                            textInputConfig={{
                                keyboardType : "decimal-pad",
                                onChangeText: inputChangedHandler.bind(this, 'amount'),
                                value: inputs.amount.value,
                            }}
                        />
                        {inputErrorHandler('amount', 'Amount has to be a value greater than 0.')}
                    </View>
                    <View style={styles.input}>
                        <Input
                            hasError={!inputs.date.isValid}
                            label="Date"
                            textInputConfig={{
                                placeholder: "YYYY-MM-DD",
                                onChangeText: inputChangedHandler.bind(this, 'date'),
                                maxLength: 10,
                                value: inputs.date.value,
                            }}
                        />
                        {inputErrorHandler('date', 'Date has to be in the format YYYY-MM-DD.')}
                    </View>
                </View>
                <Input
                    hasError={!inputs.description.isValid}
                    label="Description"
                    textInputConfig={{
                        multiline: true,
                        autoCorrect: false,
                        placeholder: "What you paid?",
                        onChangeText: inputChangedHandler.bind(this, 'description'),
                        maxLength: 255,
                        value: inputs.description.value,
                    }}
                />
                {inputErrorHandler('description', 'Description has to be filled and less than 255 characters')}
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
    input: {
        width: '50%',
    },
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputErrorText: {
        color: GlobalStyles.colors.error500,
        fontSize: 12,
        marginBottom: 8,
    }
});