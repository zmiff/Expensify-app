import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let wrapper, history, startEditExpense ;

beforeEach(() => {
  startEditExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      startEditExpense={startEditExpense}
      history={history}
      expense= {expenses[0]}
      />
    );
});

test('should render editExpengePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle startEditExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
})
