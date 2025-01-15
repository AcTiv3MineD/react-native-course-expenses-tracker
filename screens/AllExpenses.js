import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { useDispatch, useSelector } from "react-redux";
import { setExpenses } from '../store/redux/expenses';
import { fetchExpenses } from '../utils/http';
import { useEffect, useState } from 'react';
import LoadingOverlay from '../components/UI/LoadingOverlay';

function AllExpenses() {
  const dispatch = useDispatch();
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      const expenses = await fetchExpenses();
      dispatch(setExpenses(expenses));
      setIsFetching(false);
    }

    getExpenses();
  }, [dispatch]);
  const expenses = useSelector(state => state.expenses.expenses);

  if(isFetching) {
    return <LoadingOverlay />;
  }

  return (
    <ExpensesOutput expensesPeriod="Total" expenses={expenses} fallbackText='No expenses logged, time to add some!' />
  );
}

export default AllExpenses;