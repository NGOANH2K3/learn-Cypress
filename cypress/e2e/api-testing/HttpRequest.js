describe('HTTP Request', () => {
    it('GET', () => {
        cy.request('GET','https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal', 200)
    });

    it('POST',()=>{
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body:{
                title: 'foo',
                body: 'bar',
                userId: 1,
            }
        })
        .its('status')
        .should('equal', 201)
    })

    it('PUT',()=>{
        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: {
                id: 1,
                title: 'foo',
                body: 'bar',
                userId: 1,
            }
        })
        .its('status')
        .should('equal',200)
    })
    it('DELETE',()=>{
        cy.request({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
        })
        .its('status')
        .should('equal',200)
    })
});