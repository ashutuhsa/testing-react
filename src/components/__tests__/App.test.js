import { shallow } from 'enzyme'
import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import ReviewContainer from '../ReviewContainer'
import ReviewList from '../ReviewList'

let wrapped

beforeEach(() => {
  wrapped = shallow(<App />)
})

it('shows a review container', () => {
  expect(wrapped.find(ReviewContainer).length).toEqual(1)
})

it('shows a review list', () => {
  expect(wrapped.find(ReviewList).length).toEqual(1)
})
