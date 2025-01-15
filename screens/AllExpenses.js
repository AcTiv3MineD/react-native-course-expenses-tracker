import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { useDispatch, useSelector } from "react-redux";
import { setExpenses } from '../store/redux/expenses';
import { fetchExpenses } from '../utils/http';
import { useEffect, useState } from 'react';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import ErrorOverlay from '../components/UI/ErrorOverlay';

function AllExpenses() {
  const dispatch = useDispatch();
  const [isFetching, setIsFetching] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

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
  const expenses = useSelector(state => state.expenses.expenses);

  if(errorMessage && !isFetching) {
    return <ErrorOverlay message={errorMessage} />;
  }

  if(isFetching) {
    return <LoadingOverlay />;
  }

  return (
    <ExpensesOutput expensesPeriod="Total" expenses={expenses} fallbackText='No expenses logged, time to add some!' />
  );
}

export default AllExpenses;