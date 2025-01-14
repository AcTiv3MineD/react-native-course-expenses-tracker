import { useSelector } from 'react-redux';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

function RecentExpenses() {
  const allExpenses = useSelector(state => state.expenses.expenses);
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