import { useDispatch, useSelector } from 'react-redux';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { useEffect, useState } from 'react';
import { setExpenses } from '../store/redux/expenses';
import { fetchExpenses } from '../utils/http';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import ErrorOverlay from '../components/UI/ErrorOverlay';

function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      try {
        const expenses = await fetchExpenses();
        dispatch(setExpenses(expenses));
      }
      catch(error) {
        setErrorMessage('Could not fetch expenses!');
      }
      setIsFetching(false);
    }

    getExpenses();
  }, [dispatch]);

  const allExpenses = useSelector((state) => state.expenses.expenses);

  if(errorMessage && !isFetching) {
    return <ErrorOverlay message={errorMessage} />;
  }

  if(isFetching) {
    return <LoadingOverlay />;
  }

  const recentExpenses = allExpenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    const today = new Date();
    const sevenDaysAgo = new Date(today.setDate(today.getDate() - 7));
    return expenseDate >= sevenDaysAgo;
  });

  return (
    <ExpensesOutput expensesPeriod="Last 7 days" expenses={recentExpenses} fallbackText='No recent expenses logged, time to add some!' />
  );
}

export default RecentExpenses;