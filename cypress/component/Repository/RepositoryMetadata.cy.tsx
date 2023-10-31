import React from 'react'
import { RepositoryMetadata } from '../../../components/Repository/RepositoryMetadata'

describe('<RepositoryMetadata />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<RepositoryMetadata />)
  })
})