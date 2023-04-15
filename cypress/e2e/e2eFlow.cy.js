import addCustomerPage from "../support/pages/managerPages/addCustomerPage"
import customerHomePage from "../support/pages/customerPages/customerHomePage"
import depositPage from "../support/pages/customerPages/depositPage"
import homePage from "../support/pages/homePage"
import managerHomePage from "../support/pages/managerPages/managerHomePage"
import utils from "../support/utils"

describe('writing script with page obj pattern',()=>{

    before('Open application home page',()=>{
        cy.visit('/')
    })

    beforeEach('Before Each',()=>{
        cy.visit('/')
        cy.restoreLocalStorage();
       
    })

    afterEach('after each test',()=>{
        
        cy.saveLocalStorage();
        homePage.navigateToHomePage()
    })

    it('Login As Manager And Add a customer',()=>{

        const customerLastName = 'peter' + utils.getRandomString()
        const customerFirstName = 'mike'

        let customerDetails = {
            firstName:customerFirstName,
            lastName: customerLastName,
            postCode: 12345
        }

        cy.setLocalStorage('customerFirstName',customerFirstName )
        cy.setLocalStorage('customerLastsName',customerLastName )
        cy.setLocalStorage('customerName','Albus Dumbledore')
        homePage.loginAsManager()
        managerHomePage.navigateToAddCustomerPage()
        addCustomerPage.addCustomer(customerDetails)
    })

    it('Login as customer with no account and verity message displayed',()=>{

        
        cy.getLocalStorage('customerName')
        .then(customerName=>{
            homePage.loginAsCustomer(customerName);
        })
        
    })

    it('deposit x amount and verity Balance',()=>{

        cy.getLocalStorage('customerName')
        .then(customerName=>{
            homePage.loginAsCustomer(customerName);   
        })

        customerHomePage.navigateToDepositPage()
        depositPage.depositAmount(100)

    })

    it('Deposit more and verity balance',()=>{

        cy.getLocalStorage('customerName')
        .then(customerName=>{
            homePage.loginAsCustomer(customerName);   
        })

        customerHomePage.navigateToDepositPage()
        depositPage.depositAmount(50)
        cy.getLocalStorage('balanceAmount').then(balance=>{
            assert.equal(balance,150)
         })
    })
})


// before 
//before each - executed before every test
// it  - test1
// after each executed 

//before each - executed before every test
// it  - test2
// after each executed 

//before each - executed before every test
// it  - test3
// after each executed 

//after



