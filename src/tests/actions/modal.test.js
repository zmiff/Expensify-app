import { closeModal, openModal } from '../../actions/modal';

test('Should call closeModal action', () => {
  const action = closeModal();
  expect(action).toEqual({
    type: 'CLOSE_MODAL'
  })
});

test('Should call openModal action', () => {
  const action = openModal();
  expect(action).toEqual({
    type: 'OPEN_MODAL'
  })
});
