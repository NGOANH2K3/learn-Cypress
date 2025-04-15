describe('Test PUT method request', () => {
    it('should be able to send a request with PUT method', () => {
        let body = {
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        }
        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            body: body
        }).then(res=>{
            let { status} = res
            let resBody = res.body
            let {userId, id, title, body} = resBody
           
            expect(status).to.eq(200,'verifing responce header')
            expect(userId).to.eq(resBody.userId, 'verifing userId')
            expect(id).to.eq(resBody.id, 'verifing Id')
            expect(title).to.eq(resBody.title, 'verifing Title')
            expect(body).to.eq(resBody.body, 'verifing Body')
        })
    });
});