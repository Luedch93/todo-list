import React from 'react';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Input from './Input';

Enzyme.configure({ adapter: new Adapter() });

describe('<Input />', () => {

  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((init) => [init, setState])

  beforeEach(() => {
    wrapper = Enzyme.shallow(<Input />);
  })

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('Must have a input field', () => {
    expect(wrapper.find('input')).toHaveLength(1);
  })

  it('Must have a button', () => {
    expect(wrapper.find('button')).toHaveLength(1);
  })

  it('Must have a placeholder message', () => {
    expect(wrapper.find('input').props().placeholder).toBe('Add a new Task');
  })
  
  it('Must execute a callback when click button', () => {
    const onAddTodo = jest.fn();
    const otherWrapper = Enzyme.shallow(<Input onAddTodo={onAddTodo}></Input>)
    otherWrapper.find('button').simulate('click')
    expect(onAddTodo).toHaveBeenCalledTimes(1)
  })

  it('Must execute a callback when click button', () => {
    const onAddTodo = jest.fn();
    const otherWrapper = Enzyme.shallow(<Input onAddTodo={onAddTodo}></Input>)
    otherWrapper.find('input').simulate('keypress', {key: 'Enter'})
    expect(onAddTodo).toHaveBeenCalledTimes(1)
  })
})