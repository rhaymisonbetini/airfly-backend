'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager');

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/login', 'AuthController.login')

Route.get('/tickets', 'TicketController.listTickets')
Route.get('/ticket/:ticketId', 'TicketController.getTicketById')
Route.get('/user-ticket/:ticketId', 'TicketController.getUserTicket')
Route.post('/check-ticket','TicketController.checkTicket')

Route.group(() => {

}).middleware('authenticator');