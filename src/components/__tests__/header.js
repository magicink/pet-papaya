import { render, screen } from '@testing-library/react'
import React from "react"
import renderer from "react-test-renderer"

import Header from "../header"

jest.mock('prop-types')

describe("Header", () => {
  it("matches snapshot", () => {
    const tree = renderer
      .create(<Header siteTitle="Default Starter" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders', () => {
    render(<Header siteTitle={'test'} />)
    expect(screen.getByTestId('site-header')).toBeInTheDocument()
  })
})