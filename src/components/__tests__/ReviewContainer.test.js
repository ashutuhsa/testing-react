import { render, screen, fireEvent } from '@testing-library/react'
import { shallow } from 'enzyme'
import React from 'react'
import ReactDOM from 'react-dom'
import ReviewContainer from '../ReviewContainer'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'

let wrapped

beforeEach(() => {
  render(<ReviewContainer />)
})

const setup = () => {
  const utils = render(<ReviewContainer />)
  const input = utils.getAllByTestId('reviewText')
  return {
    input,
    ...utils
  }
}

it('has a textarea and button', () => {
  expect(screen.getByRole('textbox')).toBeInTheDocument()
  expect(screen.getByRole('button')).not.toHaveAttribute('disabled')
})

it('has a text area that users can change the value', () => {
  // wrapped.find('textarea').simulate('change', {
  //   target: { value: 'new text review' }
  // })
  // const { input } = setup()
  // fireEvent.change(input, { target: { value: 'this is a test review' } })
  fireEvent.change(screen.getByText(/submit/i), { target: { value: 'this is a test review' } })
  // expect(input.value).toBe('this is a test review')
})
