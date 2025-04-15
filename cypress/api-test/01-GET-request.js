describe('Test GET Request', ()=>{
    it('should be able to send GET request and veryfi the response',()=>{
        cy.request({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'GET'
        }).then(response=>{
            // cy.log(JSON.stringify(response.body))
            expect(response.status).to.eq(200);
            expect(response.body.length).to.eq(100);
        })
    })
})