describe('Test GET Request', ()=>{
    it('should be able to send GET request and veryfi the response',()=>{
        cy.request({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'GET'
        }).then(response=>{
            // destructure
            let {status,body}=response
            expect(status).to.eq(200);
            expect(body.length).eq(100);

            // get a ramdom element from array object
            let ramdomObject = body[Math.floor(Math.random() * body.length)]

            // veryfication
            veryfiNotEmpty('userID',ramdomObject.userId)
            veryfiNotEmpty('ID',ramdomObject.id)
            veryfiNotEmpty('Title',ramdomObject.title)
            veryfiNotEmpty('Body',ramdomObject.body)
        })
    })
})

let veryfiNotEmpty = (name, data) => {
    if(!data){
        expect(true).to.eq(false,`${name} data is empty`)
    }
}