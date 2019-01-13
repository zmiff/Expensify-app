import React from 'react';
import {connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import DeleteModal from './DeleteModal';
import { startEditExpense } from '../actions/expenses';
import { openModal }  from '../actions/modal';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense)
    this.props.history.push('/')
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={ this.onSubmit }
          />
          <button className="button--secondary" onClick={ () => {this.props.openModal()} }>Remove Expense</button>
        </div>
        <div>
          <DeleteModal
            expense={ this.props.expense }
            history={ this.props.history }
           />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id),
    isOpen: state.modal.isOpen
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  openModal: () => dispatch(openModal())
});


export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
