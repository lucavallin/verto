import React from 'react'
import { SponsorSection } from '../../../components/Sponsor/SponsorSection'

describe('<SponsorSection />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SponsorSection />)
  })
})