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

    async checkTicket({ request, params, response }) {

        let { ticketId } = request.all();

        let ticketRepository = new TicketsRepository();

        let check = await ticketRepository.checkTicket(ticketId);

        if (check) {
            return response.status(200).send(check);
        } else {
            return response.status(200).send({ message: 'NOT_USED' })
        }

    }

}

module.exports = TicketController
