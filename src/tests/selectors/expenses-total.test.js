import selectTotalExpenses from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses'

test('should return 0 if no expenses', ()=>{
  const result = selectTotalExpenses([]);
  expect(result).toBe(0);
});

test('should add up a single expense', () => {
  const result = selectTotalExpenses([expenses[0]]);
  expect(result).toBe(expenses[0].amount);
});

test('should correctly add up multiple expenses', () => {
  const result = selectTotalExpenses(expenses);
  expect(result).toBe(expenses[0].amount+expenses[1].amount+expenses[2].amount);
});
