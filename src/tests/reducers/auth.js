import authReducer from '../../reducers/auth';

test('should login with uid', () => {
  const action = {
      type: 'LOGIN',
      uid: 'uid1234'
  };
  const state = expensesReducer(action);
  expect(state.uid).toEqual(action.uid)
});

test('should logout with uid', () => {
  const action = {
      type: 'LOGIN'
  };
  const state = expensesReducer({uid: 'something', action);
  expect(state).toEqual({})
});
