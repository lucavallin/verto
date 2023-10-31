import React from 'react'
import { RepositoryList } from '../../../components/Repository/RepositoryList'

describe('<RepositoryList />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<RepositoryList />)
  })
})