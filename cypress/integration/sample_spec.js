import { getInternalURL } from '../helper'

const HOME_URL = getInternalURL('HOME_URL')

describe('FIrst test', function() {
    it('Does smth', function(){
        cy.visit(HOME_URL)
    })
})