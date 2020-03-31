import React from 'react'
import Button from './Button'
import { render } from '@testing-library/react'

it('renders without crashing', () => {
  const { getByText } = render(<Button />)
  expect(getByText('Hello')).toBeInTheDocument()
})
