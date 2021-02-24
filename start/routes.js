'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager');


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', ({ view }) => {
    return view.render('welcome')
})


//rotas web
Route.post('/register','AuthController.registerUser')

Route.get('/get-all-users', 'UserController.getAllUsers')

Route.get('/get-all','TicketController.listAllTickts');
Route.get('/count-all-tickets','TicketController.countAllTickets');
Route.post('/create-ticket-web', 'TicketController.createTicketWeb');
Route.put('/update-ticket','TicketController.updateTicket');
Route.delete('/delete-ticket/:id','TicketController.deleteTicket');

//rotas do aplicativo

/*rotas  cliente */
Route.post('/login', 'AuthController.login')
Route.post('/login-fiscal', 'AuthController.loginFiscal')
Route.get('/count', 'TicketController.countMyTickets');
Route.get('/tickets', 'TicketController.listTickets')
Route.get('/ticket/:ticketId', 'TicketController.getTicketById')
Route.get('/user-ticket/:ticketId', 'TicketController.getUserTicket')
Route.post('/check-ticket', 'TicketController.checkTicket')
Route.get('/verify-consumer/:code', 'TicketController.verifyConsumer');

/*rotas  cliente */
Route.get('/get-user-ticket-by-qrcode/:code', 'TicketController.getUserByQrCode');

Route.group(() => {
}).middleware('authenticator');