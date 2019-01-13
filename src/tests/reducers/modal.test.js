import modalReducer from '../../reducers/modal';

test('should call closeModal and set isOpen to false', () => {
  const action = {
      type: 'CLOSE_MODAL',
  };
  const state = modalReducer({}, action);
  expect(state.isOpen).toEqual(false)
});

test('should call openModal and set isOpen to true', () => {
  const action = {
      type: 'OPEN_MODAL',
  };
  const state = modalReducer({}, action);
  expect(state.isOpen).toEqual(true)
});
