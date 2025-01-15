import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { useDispatch, useSelector } from "react-redux";
import { setExpenses } from '../store/redux/expenses';
import { fetchExpenses } from '../utils/http';
import { useEffect } from 'react';

function AllExpenses() { 
  const dispatch = useDispatch();
  useEffect(() => {
    async function getExpenses() {
      const expenses = await fetchExpenses();
      dispatch(setExpenses(expenses));
    }

    getExpenses();
  }, [dispatch]);
  const expenses = useSelector(state => state.expenses.expenses);

  return (
    <ExpensesOutput expensesPeriod="Total" expenses={expenses} fallbackText='No expenses logged, time to add some!' />
  );
}

export default AllExpenses;