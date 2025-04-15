import { DEFAULT } from "../utils/methods";
describe('Handling async request in Cypress', () => {
    it('should be able to wait until a request resolved', async() => {
        // let response = await cy.request({
        //     method: DEFAULT.get,
        //     url: 'https://jsonplaceholder.typicode.com/posts' ,
        // })

        // expect(response.status).to.eq(200);
        // expect(response.body.length).to.eq(100);


        // let deleteReq = await new Cypress.Promise((resolve,reject) => {
        //     cy.request({
        //         method: DEFAULT.delete,
        //         url: 'https://jsonplaceholder.typicode.com/posts/1' ,
        //     }).then(val => resolve(val))
        // })
        // cy.log(JSON.stringify(deleteReq))

        //CRUD
        // let url = 'https://jsonplaceholder.typicode.com/posts'
        let url = Cypress.env('baseUrl')
        // syntax : npm run test --spec (nơi muốn chạy) --env baseUtl = https://jsonplaceholder.typicode.com/posts
        let header = {
            'Content-type': 'application/json; charset=UTF-8',
        }
        let createdPostBody = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }
        let updatedPostBody = {
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        }

        cy.createPost(createdPostBody)
            .then(res=>{
                cy.getPost((Number(res.body.id) - 1).toString())
                    .then(res=>{
                        cy.updatePost(updatedPostBody)
                            .then(res => {
                                cy.request({
                                    method: DEFAULT.delete,
                                    url: url + '/' + res.body.id,
                                }).then(res => {
                                    cy.log(JSON.stringify(res))
                                })
                            })
                    })
            })
    });
});