describe('Test POST request',()=>{
    it('should be able to send a POST request and get response',()=>{
        let url = 'https://jsonplaceholder.typicode.com/posts'
        let header = {
            'Content-type': 'application/json; charset=UTF-8',
        }

        let requestBody = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }

        let requestObject = {
            method: 'POST',
            url: url,
            headers: header,
            body: requestBody
        }

        cy.request(requestObject).then(res => {
            
                let {status,body} = res
                cy.log(JSON.stringify(body))
                expect(status).to.eq(201, 'Status is not 200')
                let {userId, id, title} = body
                let responseBody = body.body

                //Verification
                expect(userId).to.eq(requestBody.userId,'verifing userId')
                expect(id).to.eq(101,'verifing Id')
                expect(title).to.eq(requestBody.title,'verifing Title')
                expect(responseBody).to.eq(requestBody.body,'verifing Body')
            })
        })
    })
