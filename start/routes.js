'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager');


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', ({ view }) => {
    return view.render('welcome')
})

Route.post('/login', 'AuthController.login')

Route.group(() => {
    Route.get('/tickets', 'TicketController.listTickets')
    Route.get('/ticket/:ticketId', 'TicketController.getTicketById')
    Route.get('/user-ticket/:ticketId', 'TicketController.getUserTicket')
    Route.post('/check-ticket', 'TicketController.checkTicket')
}).middleware('authenticator');