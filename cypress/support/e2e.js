/// <reference types="cypress" />

require('./commands')

// load and register the grep feature
import registerCypressGrep from '@cypress/grep'
registerCypressGrep()
