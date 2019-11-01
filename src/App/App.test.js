import React from 'react'

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from './App'
import expectationResultFactory from 'jest-jasmine2/build/expectationResultFactory'

Enzyme.configure({ adapter: new Adapter() })

describe('<App />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = Enzyme.mount(<App></App>)
    const input = wrapper.find('input')
    input.simulate('change', { target: { value: 'Todo 1' } })
    input.simulate('keypress', { key: 'Enter' })
    input.simulate('change', { target: { value: 'Todo 2' } })
    input.simulate('keypress', { key: 'Enter' })
    input.simulate('change', { target: { value: 'Todo 3' } })
    input.simulate('keypress', { key: 'Enter' })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("Should render the component with three TODO's", () => {
    expect(wrapper).toBeTruthy()
    expect(wrapper.find('input[type="checkbox"]').length).toEqual(3)
  })

  it("Should clear all the completed TODO's", () => {
    wrapper
      .find('input[type="checkbox"]')
      .at(0)
      .simulate('change', { target: { checked: true } })
    wrapper
      .find('input[type="checkbox"]')
      .at(1)
      .simulate('change', { target: { checked: true } })
    wrapper
      .find('button')
      .at(1)
      .simulate('click')
    expect(wrapper.find('input[type="checkbox"]').length).toEqual(1)
  })
})
