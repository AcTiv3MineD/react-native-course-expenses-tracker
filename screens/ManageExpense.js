import { useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { GlobalStyles } from '../constants/styles';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense, deleteExpense, updateExpense } from '../store/redux/expenses';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';

function ManageExpense({route, navigation}) {
  let expense = {};
  const action = route.params.action;
  const dispatch = useDispatch();

  if(action == 'manage') {
    expense = useSelector(state => state.expenses.expenses.find(expense => expense.id === route.params.id));
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: action == 'manage' ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, action]);

  function cancelHandler() {
    navigation.goBack();
  }

  function submitHandler(expenseData) {
    if(action === 'manage') {
      dispatch(updateExpense({
        id: expense.id,
        description: expenseData.description,
        amount: expenseData.amount,
        date: expenseData.date,
      }));
    }
    else {
      dispatch(addExpense({
        id: Math.random(),
        description: expenseData.description,
        amount: expenseData.amount,
        date: expenseData.date,
      }));
    }
  
    navigation.goBack();
  }

  function deleteHandler() {
    dispatch(deleteExpense(route.params.id));
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        expense={expense}
        action={action}
        onCancel={cancelHandler}
        onDelete={deleteHandler}
        onSubmit={submitHandler}
      />
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
})