import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { useSelector } from "react-redux";

function AllExpenses() {
  const expenses = useSelector(state => state.expenses.expenses);

  return (
    <ExpensesOutput expensesPeriod="Total" expenses={expenses} fallbackText='No expenses logged, time to add some!' />
  );
}

export default AllExpenses;