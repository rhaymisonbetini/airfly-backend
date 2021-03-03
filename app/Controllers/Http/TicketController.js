'use strict'

const TicketsRepository = use("App/Repositories/TicketsRporitosy");

class TicketController {


    async countMyTickets({ request, response }) {
        try {

            let id = request.header('id');
            let ticketRepository = new TicketsRepository();
            let total = await ticketRepository.totalUserd(id);
            let free = await ticketRepository.totalFree(id);
            return response.status(200).send({ total, free })

        } catch (e) {
            console.log(e);
            return response.status(500).send(e)
        }
    }


    async listTickets({ request, response }) {

        try {

            let id = request.header('id');
            let ticketRepository = new TicketsRepository();
            let tickets = await ticketRepository.listTickets(id);
            if (tickets) {
                return response.status(200).send(tickets);
            } else {
                return response.status(200).send({ message: 'NOT_FOUND' })
            }

        } catch (e) {
            console.log(e);
            return response.status(500).send(e)
        }

    }

    async listAllTickts({ response }) {
        try {

            let ticketRepository = new TicketsRepository();
            let tickets = await ticketRepository.allTickets();
            if (tickets) {
                return response.status(200).send(tickets);
            } else {
                return response.status(200).send({ message: 'NOT_FOUND' })
            }

        } catch (e) {
            console.log(e);
            return response.status(500).send(e)
        }
    }

    async countAllTickets({ response }) {
        try {

            let ticketRepository = new TicketsRepository();
            let tickets = await ticketRepository.countAllTickets();
            if (tickets) {
                return response.status(200).send(tickets);
            } else {
                return response.status(200).send({ message: 'NOT_FOUND' })
            }

        } catch (e) {
            console.log(e);
            return response.status(500).send(e)
        }
    }

    async getTicketById({ params, response }) {

        try {

            let ticketId = params.ticketId;
            let ticketRepository = new TicketsRepository();
            let ticket = await ticketRepository.getTicketById(ticketId);
            if (ticket) {
                return response.status(200).send(ticket);
            } else {
                return response.status(200).send({ message: 'NOT_FOUND' })
            }


        } catch (e) {
            console.log(e);
            return response.status(500).send(e)
        }

    }

    async getUserTicket({ request, params, response }) {

        try {

            let ticketId = params.ticketId;
            let ticketRepository = new TicketsRepository();
            let userTicket = await ticketRepository.getUserTicket(ticketId);
            if (userTicket) {
                return response.status(200).send(userTicket);
            } else {
                return response.status(200).send({ message: 'NOT_FOUND' })
            }

        } catch (e) {
            console.log(e);
            return response.status(500).send(e)
        }
    }


    async verifyConsumer({ request, params, response }) {
        try {

            let code = params.code;
            let ticketRepository = new TicketsRepository();
            let check = await ticketRepository.verifyConsumer(code);
            if (check) {
                return response.status(200).send({ message: 'USED' });
            } else {
                return response.status(200).send({ message: 'NOT_USED' })
            }

        } catch (e) {
            console.log(e);
            return response.status(500).send(e)
        }
    }


    //rotas do fiscal

    async getUserByQrCode({ request, params, response }) {

        try {

            let code = params.code;
            let ticketRepository = new TicketsRepository();
            let check = await ticketRepository.getUserByQrCode(code);
            if (check) {
                return response.status(200).send(check);
            } else {
                return response.status(200).send({ message: 'NOT_USED' })
            }

        } catch (e) {
            console.log(e);
            return response.status(500).send(e)
        }

    }


    async checkTicket({ request, params, response }) {

        try {

            let { code } = request.all();
            let ticketRepository = new TicketsRepository();
            let check = await ticketRepository.checkTicket(code);
            if (check) {
                return response.status(200).send({ message: 'USED' });
            } else {
                return response.status(200).send({ message: 'NOT_USED' })
            }

        } catch (e) {
            console.log(e);
            return response.status(500).send(e)
        }

    }


    async createTicketWeb({ request, response }) {

        try {
            console.log(request)

            let newTicket = request.all();
            let ticketRepository = new TicketsRepository();
            let generatedTicket = await ticketRepository.createTicketWeb(newTicket);
            return response.status(200).send(generatedTicket);

        } catch (e) {
            console.log(e);
            return response.status(500).send(e);
        }

    }

    async updateTicket({ request, response }) {

        try {

            let ticket = request.all();
            let ticketRepository = new TicketsRepository();
            let updatedTicket = await ticketRepository.updateTicket(ticket);
            if (updatedTicket) {
                let newTicket = await ticketRepository.getTicketById(ticket.id);
                return response.status(200).send(newTicket);
            }


        } catch (e) {
            console.log(e);
            return response.status(500).send(e);
        }

    }


    async deleteTicket({ response, params }) {
        try {

            let id = params.id;
            let ticketRepository = new TicketsRepository();
            let ticket = await ticketRepository.deleteTicketById(id);
            if (ticket) {
                return response.status(200).send(ticket);
            } else {
                return response.status(200).send({ message: 'NOT_FOUND' })
            }

        } catch (e) {
            console.log(e);
            return response.status(500).send(e);
        }
    }


}

module.exports = TicketController
