import moment from 'moment';
import {
  setEndDate,
  setStartDate,
  sortByDate,
  sortByAmount,
  setTextFilter
} from '../../actions/filters';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(0)
  });
});
test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(0)
  })
})
test('should generate sortByDate action', () => {
  const action = sortByDate();
  expect(action).toEqual({ type: 'SORT_BY_DATE' })
})
test('should generate sortByAmount action', () => {
  const action = sortByAmount();
  expect(action).toEqual({ type: 'SORT_BY_AMOUNT' })
})
test('should setup set text filter action object with provided values', () => {
  const text = 'some text';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});
test('should setup set text filter action object with default values', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});
