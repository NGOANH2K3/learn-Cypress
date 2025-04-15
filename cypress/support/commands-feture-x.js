import { DEFAULT } from "../utils/methods"
let header = {
    'Content-type': 'application/json; charset=UTF-8',
}

/**
 * @memberof cy
 * @method getPost
 * @param {string} postNum
 */

Cypress.Commands.add('getPost', postNum => {
    cy.request({
        method: DEFAULT.get,
        url: Cypress.env('baseUrl') + '/' + postNum
    })
})