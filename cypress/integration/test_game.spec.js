describe('Launch slot game application test',() => {

    it('Navigate to game site',() => {

        cy.visit('./Test_Task.html')
        
    })
    it ('Check available balance after launch is always 1000',() => {
        
        cy.get('#balance-value').invoke('val').should('eq','1000')
                
    })
    it ('Check if unaccepted no. sequence is fed to test data total score decrements with 1 from current value',() => {
        //e.g pass in 999 as an invalid test data
        cy.get('#testdata').clear()        
        cy.get('#testdata').type('999')
        cy.get('#spinButton').click()        
        cy.get('#balance-value').invoke('val').should('eq','999')
                
    })
    it ('Check available balance not equal to 1000 after clicking spin',() => {
        //The balance either decreases by 1 or increases by min 60 points.
        cy.get('#spinButton').click()
        cy.get('#balance-value').invoke('val').should('not.eq','1000')
                
    })
    it ('Check individual value of reels in middle row to have consistency with points won message based on test data input',() => {
        cy.get('#testdata').clear()      
        cy.get('#testdata').type('11111')
        cy.get('#spinButton').click()
        
        cy.get('#reel1 > .notch2').contains('1') & 
        cy.get('#reel2 > .notch2').contains('1') & 
        cy.get('#reel3 > .notch2').contains('1') &
        cy.get('#reel4 > .notch2').contains('1') &
        cy.get('#reel5 > .notch2').contains('1') &
        cy.contains('Win 100 coins').should('be.visible') 
                        
    })   

    it ('Check if string sequence is fed to test data total score decrements with 1 from current value',() => {
        //e.g pass in abcde as false test data
        cy.get('#balance-value').clear()
        //set current balance to 1000 again.
        cy.get('#balance-value').type('1000')
        cy.get('#testdata').clear()
        cy.get('#testdata').type('abcde')
        cy.wait(5000)        
        cy.get('#spinButton').click()
        cy.get('#balance-value').invoke('val').should('eq','999')


    })
    it ('Check if special character sequence is fed to test data total score decrements with 1 from current value',() => {
        //e.g pass in !@#$% as false test data
        cy.get('#balance-value').clear()
        //set current balance to 1000 again.
        cy.get('#balance-value').type('1000')
        cy.get('#testdata').clear()
        cy.get('#testdata').type('!@#$%')
        cy.wait(5000)        
        cy.get('#spinButton').click()
        cy.get('#balance-value').invoke('val').should('eq','999')
                        
    })
   
    
    it ('Check if click with test data 111 adds up 60 to total present score always',() => {

        cy.get('#testdata').clear()      
        cy.get('#testdata').type('111')
        cy.wait(5000)
        cy.get('#spinButton').click()
        cy.get('#reel1 > .notch2').contains('1') & 
        cy.get('#reel2 > .notch2').contains('1') & 
        cy.get('#reel3 > .notch2').contains('1') &                          
        cy.contains('Win 60 coins').should('be.visible')
        
    })
    it ('Check if click with test data 1111 adds up 80 to total present score always',() => {

        cy.get('#testdata').clear()      
        cy.get('#testdata').type('1111')
        cy.wait(5000)
        cy.get('#spinButton').click()
        cy.get('#reel1 > .notch2').contains('1') & 
        cy.get('#reel2 > .notch2').contains('1') & 
        cy.get('#reel3 > .notch2').contains('1') &
        cy.get('#reel4 > .notch2').contains('1') &                  
        cy.contains('Win 80 coins').should('be.visible')        
                
    })
    it ('Check if click with test data 11111 adds up 100 to total present score always',() => {

        cy.get('#testdata').clear()      
        cy.get('#testdata').type('11111')
        cy.wait(5000)
        cy.get('#spinButton').click()
        cy.get('#reel1 > .notch2').contains('1') & 
        cy.get('#reel2 > .notch2').contains('1') & 
        cy.get('#reel3 > .notch2').contains('1') &
        cy.get('#reel4 > .notch2').contains('1') &
        cy.get('#reel5 > .notch2').contains('1') &           
        cy.contains('Win 100 coins').should('be.visible')                                  
    })
    it ('Check if click with test data 222 adds up 120 to total present score always',() => {
        cy.get('#testdata').clear()      
        cy.get('#testdata').type('222')
        cy.wait(5000)
        cy.get('#spinButton').click()
        cy.get('#reel1 > .notch2').contains('2') & 
        cy.get('#reel2 > .notch2').contains('2') & 
        cy.get('#reel3 > .notch2').contains('2') &           
        cy.contains('Win 120 coins').should('be.visible')                                     
    })
    it ('Check if click with test data 2222 adds up 160 to total present score always',() => {
        cy.get('#testdata').clear()      
        cy.get('#testdata').type('2222')
        cy.wait(5000)
        cy.get('#spinButton').click()
        cy.get('#reel1 > .notch2').contains('2') & 
        cy.get('#reel2 > .notch2').contains('2') & 
        cy.get('#reel3 > .notch2').contains('2') &   
        cy.get('#reel4 > .notch2').contains('2') &               
        cy.contains('Win 160 coins').should('be.visible')                        
    })
    it ('Check if click with test data 22222 adds up 200 to total present score always',() => {

        cy.get('#testdata').clear()      
        cy.get('#testdata').type('22222')
        cy.wait(5000)
        cy.get('#spinButton').click()
        cy.get('#reel1 > .notch2').contains('2') & 
        cy.get('#reel2 > .notch2').contains('2') & 
        cy.get('#reel3 > .notch2').contains('2') &   
        cy.get('#reel4 > .notch2').contains('2') &   
        cy.get('#reel5 > .notch2').contains('2') &                                        
        cy.contains('Win 200 coins').should('be.visible')                        
    })
    it ('Check if click with test data 333 adds up 180 to total present score always',() => {

        cy.get('#testdata').clear()      
        cy.get('#testdata').type('333')
        cy.wait(5000)
        cy.get('#spinButton').click()
        cy.get('#reel1 > .notch2').contains('3') & 
        cy.get('#reel2 > .notch2').contains('3') & 
        cy.get('#reel3 > .notch2').contains('3') &                                        
        cy.contains('Win 180 coins').should('be.visible')                
    })
    it ('Check if click with test data 3333 adds up 240 to total present score always',() => {

        cy.get('#testdata').clear()      
        cy.get('#testdata').type('3333')
        cy.wait(5000)
        cy.get('#spinButton').click()
        cy.get('#reel1 > .notch2').contains('3') & 
        cy.get('#reel2 > .notch2').contains('3') & 
        cy.get('#reel3 > .notch2').contains('3') &
        cy.get('#reel4 > .notch2').contains('3') &                                
        cy.contains('Win 240 coins').should('be.visible')                        
    })
    it ('Check if click with test data 33333 adds up 300 to total present score always',() => {        
        cy.get('#testdata').clear()      
        cy.get('#testdata').type('33333')
        cy.wait(5000)
        cy.get('#spinButton').click()
        cy.get('#reel1 > .notch2').contains('3') & 
        cy.get('#reel2 > .notch2').contains('3') & 
        cy.get('#reel3 > .notch2').contains('3') &
        cy.get('#reel4 > .notch2').contains('3') &
        cy.get('#reel5 > .notch2').contains('3') &                    
        cy.contains('Win 300 coins').should('be.visible')                                                
    })
    it ('Check if click with test data 444 adds up 240 to total present score always',() => {
        cy.get('#testdata').clear()      
        cy.get('#testdata').type('444')
        cy.wait(5000)
        cy.get('#spinButton').click()
        cy.get('#reel1 > .notch2').contains('4') & 
        cy.get('#reel2 > .notch2').contains('4') & 
        cy.get('#reel3 > .notch2').contains('4') &                    
        cy.contains('Win 240 coins').should('be.visible')                
    })
    it ('Check if click with test data 4444 adds up 320 to total present score always',() => {

        cy.get('#testdata').clear()      
        cy.get('#testdata').type('4444')
        cy.wait(5000)
        cy.get('#spinButton').click()
        cy.get('#reel1 > .notch2').contains('4') & 
        cy.get('#reel2 > .notch2').contains('4') & 
        cy.get('#reel3 > .notch2').contains('4') &
        cy.get('#reel4 > .notch2').contains('4') &           
        cy.contains('Win 320 coins').should('be.visible')                                   
    })
    it ('Check if click with test data 44444 adds up 400 to total present score always',() => {        
        cy.get('#testdata').clear()      
        cy.get('#testdata').type('44444')
        cy.wait(5000)
        cy.get('#spinButton').click()
        cy.get('#reel1 > .notch2').contains('4') & 
        cy.get('#reel2 > .notch2').contains('4') & 
        cy.get('#reel3 > .notch2').contains('4') &
        cy.get('#reel4 > .notch2').contains('4') &
        cy.get('#reel5 > .notch2').contains('4') &            
        cy.contains('Win 400 coins').should('be.visible')                                        
    })
    it ('Check if click with test data 555 adds up 300 to total present score always',() => {        
        cy.get('#testdata').clear()      
        cy.get('#testdata').type('555')
        cy.wait(5000)
        cy.get('#spinButton').click()
        cy.get('#reel1 > .notch2').contains('5') & 
        cy.get('#reel2 > .notch2').contains('5') & 
        cy.get('#reel3 > .notch2').contains('5') &            
        cy.contains('Win 300 coins').should('be.visible')                                         
    })
    it ('Check if click with test data 5555 adds up 400 to total present score always',() => {        
        cy.get('#testdata').clear()      
        cy.get('#testdata').type('5555')
        cy.wait(5000)
        cy.get('#spinButton').click()
        cy.get('#reel1 > .notch2').contains('5') & 
        cy.get('#reel2 > .notch2').contains('5') & 
        cy.get('#reel3 > .notch2').contains('5') & 
        cy.get('#reel4 > .notch2').contains('5') & 
        cy.contains('Win 400 coins').should('be.visible')                
    })
    it ('Check if click with test data 55555 adds up 500 to total present score always',() => {
        cy.get('#testdata').clear()      
        cy.get('#testdata').type('55555')
        cy.wait(5000)
        cy.get('#spinButton').click()    
        cy.get('#reel1 > .notch2').contains('5') & 
        cy.get('#reel2 > .notch2').contains('5') & 
        cy.get('#reel3 > .notch2').contains('5') & 
        cy.get('#reel4 > .notch2').contains('5') & 
        cy.get('#reel5 > .notch2').contains('5') &            
        cy.contains('Win 500 coins').should('be.visible')                                               
    })
   
})