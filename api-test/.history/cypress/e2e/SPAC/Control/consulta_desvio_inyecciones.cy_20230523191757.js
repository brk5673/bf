import {USERNAME, PASSWORD, USERNAME1, PASSWORD1} from "../../../../fixtures/credentials"

describe('Test cases de modulo <SPAC/Mantenimiento/Desvio de inyecciones/Configuracion de contactos>', () => { // corregir describe
  beforeEach(() => {
    cy.visit('http://10.1.11.237:8080/etgs/login')
    cy.url()
      .should('eq', 'http://10.1.11.237:8080/etgs/login')
    cy.get('input[name="userName"]')
      .should('be.visible')
    cy.get('.logotgs')
      .should('exist')
      .and('be.visible')

    cy.get('input[name="userName"]')
      .type(USERNAME)
    cy.get('input[name="password"]')
      .type(PASSWORD)
    cy.get('button[type="submit"]')
      .click()
    cy.wait(200)
  })
})
