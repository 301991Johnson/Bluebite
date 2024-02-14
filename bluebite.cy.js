
describe('Enter the raffle to win sneakers',()=>{
    beforeEach(() => {
        cy.visit('https://blue-bite-dev-3.bluebite.io/04425f7c-4fdd-47f6-85b3-b800d12bb9ca')      //launching the url
          cy.viewport(1440, 900)
      })


    it('When Name field is not provided,field should turn red if fails form submission',()=>{
       // cy.get("#input-3[name='name']").type("John")
        cy.get("#input-4[name='email']").type("John.Doe@gmail.com")
        cy.get("#input-8[name='age']").type("28")
        cy.get("#input-9[name='reason']").type("I am a marathon runner")
        cy.get("button[type=button]").contains('Submit').click();
        
        //cy.get().contains('The winner of the raffle will be managed independently and will be contacted via email. You have registed 1 submissions.')

        
    
    })
         
     it('When customer enters all valid value to the respected fields(Name, Age,Email,Reason) and submit the form customer should get "Submission was Successful" message on UI',()=>{
        
        cy.get("#input-3[name='name']").type("John")
        cy.get("#input-4[name='email']").type("John.Doe@gmail.com")
        cy.get("#input-8[name='age']").type("28")
        cy.get("#input-9[name='reason']").type("I am a marathon runner")
        cy.get("button[type=button]").contains('Submit').click();
        cy.wait(5000)
        cy.request('https://jsonplaceholder.typicode.com/posts?age=28&email=John.Doe%40gmail.com&name=Tim&reason=I am a marathon runner',)
        .should((response) => {
        expect(response.status).to.eq(200)
        cy.get('.cmpVnN').eq(1).contains('Submission Confirmed, John')
        cy.get('.cmpVnN').eq(2).contains('The winner of the raffle will be managed independently and will be contacted via email. You have registed 1 submissions.')
        
    
     })
    })
     it('Validate customer should have option to submit a reason for why I should win',()=>{
        cy.get("#input-3[name='name']").type("Tim")
        cy.get("#input-4[name='email']").type("Tim.cook@gmail.com")
        cy.get("#input-8[name='age']").type("30")
        cy.get("#input-9[name='reason']").type("I Should win")
        cy.get("button[type=button]").contains('Submit').click();
        cy.get('.cmpVnN').eq(1).contains('Submission Confirmed, Tim')
        cy.get('.cmpVnN').eq(2).contains('The winner of the raffle will be managed independently and will be contacted via email. You have registed 1 submissions.')
            
     })
    
     it('Validate when customer enters Age>=18 and submit the form customer should get "Submission was Successful" message on UI',()=>{
        cy.get("#input-3[name='name']").type("Tim")
        cy.get("#input-4[name='email']").type("Tim.Southee@gmail.com")
        cy.get("#input-8[name='age']").type("28")
        cy.get("#input-9[name='reason']").type("I am a marathon runner")
        cy.get("button[type=button]").contains('Submit').click();
        cy.get('.cmpVnN').eq(1).contains('Submission Confirmed, Tim')
        cy.get('.cmpVnN').eq(2).contains('The winner of the raffle will be managed independently and will be contacted via email. You have registed 1 submissions.')        
    
     })
    
     it('Validate if the customer did not enters all value to the respected fields(Name, Age,Email,Reason) and submit the form customer should get which all fields are required and is missing data',()=>{
        cy.get("#input-3[name='name']").type("")
        cy.get("#input-4[name='email']").type("")
        cy.get("#input-8[name='age']").type("")
        cy.get("#input-9[name='reason']").type("")
        cy.get("button[type=button]").contains('Submit').click();
           
    
     })
    })
