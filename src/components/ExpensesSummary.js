import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import configureStore from '../store/configureStore';
import selectExpenses from '../selectors/expenses';
import selectExpenesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({expensesCount, expensesTotal, totalExpensesCount, totalExpensesTotal}) => {
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
  const formattedExpenseTotal = numeral(expensesTotal / 100).format('0,0.00')+'kr ';
  const totalExpenseWord = totalExpensesCount === 1 ? 'expense' : 'expenses';
  const formattedTotalExpenseTotal = numeral(totalExpensesTotal / 100).format('0,0.00')+'kr ';
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Vieving <span>{expensesCount}</span> {expenseWord} totaling: <span>{formattedExpenseTotal}</span></h1>
        <p className="page-header__under--title">Total {totalExpensesCount} {totalExpenseWord} totaling:{formattedTotalExpenseTotal}</p>
        <div className="page-header__actions">
          <Link to="/create" className="button">Add Expense</Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    let expenses = selectExpenses(state.expenses, state.filters);
    let totalExpenses = state.expenses
  return {
    expensesCount: expenses.length,
    totalExpensesCount: totalExpenses.length,
    expensesTotal: selectExpenesTotal(expenses),
    totalExpensesTotal: selectExpenesTotal(totalExpenses)
  };
}

export default connect(mapStateToProps)(ExpensesSummary);
