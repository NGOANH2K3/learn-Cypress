import {DEFAULT} from '../utils/methods'
describe('Testing DELETE method', () => {
    it('should be able to send a DELETE request with Cypress', () => {
        cy.request({
            method: DEFAULT.delete,
            url: 'https://jsonplaceholder.typicode.com/posts/1' ,
        }).then(res => {
            expect(res.status).to.eq(200,'verifing responce header')
        })
    });
});