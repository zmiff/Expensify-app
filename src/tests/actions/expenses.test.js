import { addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({id: 'someid123'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'someid123'
  })
})

test('should update expense action object', () => {
  const action = editExpense('someid1234', {note: 'some note', amount: 5, description: 'abc'});
  expect(action).toEqual({
    id: 'someid1234',
    type: 'EDIT_EXPENSE',
    updates: {
      note: 'some note',
      amount: 5,
      description: 'abc'
    }
  });
});

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 49900,
    createdAt: 1000,
    note: 'lthis was last months rent'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should setup the add expense object with default values', () => {
  const expected = {
    description: '',
    amount: 0,
    createdAt: 0,
    note: ''
  }
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expected,
      id: expect.any(String)
    }
  })
})
