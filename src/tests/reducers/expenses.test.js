import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
      type: 'REMOVE_EXPENSE',
      id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]])
});

test('should not remove expenses if id not found', () => {
  const action = {
      type: 'REMOVE_EXPENSE',
      id: 'doesNotExist'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses)
});

test('should add an expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      description: 'desc',
      note: 'note',
      amount: 1950,
      createdAt: 0
    }
  }
  const state =  expensesReducer(expenses, action)
  expect(state.length).toBe(4);
  expect(state[3]).toEqual(action.expense)
})

test('should edit an expense' , () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      note: 'some new note'
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].note).toBe('some new note');
});

test('should not edit an expense if expense not fount', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: 'no id found',
    updates: {
      note: 'some new note'
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
})
