/// <reference types="cypress" />

describe("Home page", () => {
    it("loads", () => {
      cy.visit("http://localhost:3000/");
    });
});