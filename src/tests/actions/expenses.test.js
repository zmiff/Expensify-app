import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

//for async test done must be passed in as arguement
test('should add expenses to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'this one is better',
    createdAt: 1000
  }
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData)
    done();
  });
});

test('should add expenses to database and store with no values prvoded', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  }
  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData)
    done();
  });
});

// test('should setup the add expense object with default values', () => {
//   const expected = {
//     description: '',
//     amount: 0,
//     createdAt: 0,
//     note: ''
//   }
//   const action = addExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       ...expected,
//       id: expect.any(String)
//     }
//   })
// })
