import { useLayoutEffect } from 'react';
import { Text } from 'react-native';

function ManageExpense({route, navigation}) {
  let text = 'add';
  const action = route.params.action;

  if(action == 'manage') {
    text = 'manage';
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: action == 'manage' ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, action]);

  return (
    <Text>{text}</Text>
  );
}

export default ManageExpense;