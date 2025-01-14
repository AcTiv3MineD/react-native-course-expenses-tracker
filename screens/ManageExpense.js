import { useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../components/UI/Button';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense, deleteExpense, updateExpense } from '../store/redux/expenses';

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

  function confirmHandler() {
    if(action === 'manage') {
      dispatch(updateExpense({
        id: expense.id,
        description: 'UPDATED',
        amount: expense.amount,
        date: expense.date,
      }));
    }
    else {
      dispatch(addExpense({
        id: Math.random(),
        description: 'NEW',
        amount: parseFloat(Math.random() * 100),
        date: '2025-01-01',
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
      <View style={styles.buttonsContainer}>
        <View>
          <Button mode='flat' onPress={cancelHandler}>
            Cancel
          </Button>
        </View>
        <View>
          <Button onPress={confirmHandler}>{action === 'manage' ? 'Update' : 'Add'}</Button>
        </View>
        {
          action == 'manage' &&
          <View>
            <IconButton
              name="trash"
              color={GlobalStyles.colors.error500} 
              size={36}
              onPress={deleteHandler}
            />
          </View>
        }
      </View>
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
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 4,
    borderRadius: 8,
  },
})