import { useLayoutEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { GlobalStyles } from '../constants/styles';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense, deleteExpense, updateExpense } from '../store/redux/expenses';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import { storeExpense, deleteExpense as deleteExpenseAPI } from '../utils/http';
import LoadingOverlay from '../components/UI/LoadingOverlay';

function ManageExpense({route, navigation}) {
  let expense = {};
  const action = route.params.action;
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  async function submitHandler(expenseData) {
    const expenseObject = {
      description: expenseData.description,
      amount: expenseData.amount,
      date: expenseData.date,
    };

    setIsSubmitting(true);
    if(action === 'manage') {
      dispatch(updateExpense({id: expense.id, ...expenseObject}));
      updateExpense(expense.id, expenseObject);
    }
    else {
      const id = await storeExpense(expenseObject);
      dispatch(addExpense({id, ...expenseObject}));
    }

    navigation.goBack();
  }

  async function deleteHandler() {
    setIsSubmitting(true);
    await deleteExpenseAPI(route.params.id);
    dispatch(deleteExpense(route.params.id));
    navigation.goBack();
  }

  if(isSubmitting) {
    return <LoadingOverlay />;
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