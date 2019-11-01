import React from 'react'

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Todo from './Todo'

Enzyme.configure({ adapter: new Adapter() })

describe('<Todo />', () => {
  let wrapper
  const onChangeSelected = jest.fn((selected, index) => [selected, index])

  beforeEach(() => {
    wrapper = Enzyme.shallow(
      <Todo
        index={1}
        todo={{ selected: true, name: 'test Todo' }}
        onChangeSelected={onChangeSelected}
      />
    )
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Must have a input checkbox', () => {
    expect(wrapper.find('input[type="checkbox"]')).toHaveLength(1)
  })

  it('Must have a text', () => {
    expect(wrapper.find('span')).toHaveLength(1)
    expect(wrapper.find('span').text()).toEqual('test Todo')
  })

  it('Must call "onChangeSelected" when checkbox is clicked', () => {
    wrapper
      .find('input[type="checkbox"]')
      .simulate('change', { target: { checked: true } })
    expect(onChangeSelected).toHaveBeenCalled()
  })
})
