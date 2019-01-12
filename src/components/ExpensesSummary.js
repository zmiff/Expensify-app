import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import configureStore from '../store/configureStore';
import selectExpenses from '../selectors/expenses';
import SelectExpenesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({expensesCount, expensesTotal}) => {
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
  const formattedExpenseTotal = numeral(expensesTotal / 100).format('0,0.00')+'kr '

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Vieving <span>{expensesCount}</span> {expenseWord} totaling: <span>{formattedExpenseTotal}</span></h1>
        <div className="page-header__actions">
          <Link to="/create" className="button">Add Expense</Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    let expenses = selectExpenses(state.expenses, state.filters)
  return {
    expensesCount: expenses.length,
    expensesTotal: SelectExpenesTotal(expenses)
  };
}

export default connect(mapStateToProps)(ExpensesSummary);
