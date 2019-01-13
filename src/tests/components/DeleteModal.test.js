import React from 'react';
import { shallow } from 'enzyme';
import { DeleteModal } from '../../components/DeleteModal';
import expenses from '../fixtures/expenses';

let wrapper, history, startRemoveExpense, closeModal;

beforeEach(() => {
  startRemoveExpense = jest.fn();
  closeModal = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <DeleteModal
      startRemoveExpense={startRemoveExpense}
      history={history}
      closeModal={closeModal}
      expense= {expenses[0]}
      />
    );
});

test('should handle startRemoveExpense', () => {
  wrapper.find('button').at(1).simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(closeModal).toHaveBeenCalled();
  expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expenses[0].id});
});
