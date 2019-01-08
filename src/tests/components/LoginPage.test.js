import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should render LoginPage correctly', () => {
  const wrapper = shallow(<LoginPage startLogin={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogin in button click', () => {
  const onClickSpy = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={ onClickSpy } />);
  wrapper.find('button').simulate('click', () => {
    expect(onClickSpy).toHaveBeenCalled();
  })
});
