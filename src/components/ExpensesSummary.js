import React from 'react';
import { connect } from 'react-redux';
import configureStore from '../store/configureStore';
import selectExpenses from '../selectors/expenses';
import SelectExpenesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({expensesCount, expensesTotal}) => {
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
  const formattedExpenseTotal = numeral(expensesTotal / 100).format('0,0.00')+'kr '

  return (
    <div>
      <h1>Vieving {expensesCount} {expenseWord} totaling: {formattedExpenseTotal}</h1>
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
