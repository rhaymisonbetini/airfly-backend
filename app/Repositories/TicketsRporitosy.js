
const Tickets = use("App/Models/Ticket")

class TicketsRporitosy {

    async totalUserd(id) {

        let tickets = await Tickets.query()
            .where('user_id', id)
            .getCount();

        return tickets
    }

    async totalFree(id) {
        let tickets = await Tickets.query()
        .where('user_id', id)
        .where('is_used', false)
        .getCount();

    return tickets

    }

    async listTickets(id) {

        let tickets = await Tickets.query()
            .where('user_id', id)
            .where('is_used', false)
            .fetch();

        tickets = tickets.toJSON();
        return tickets;

    }

    async getTicketById(ticketId) {
        let ticket = await Tickets.find(ticketId);
        return ticket;
    }

    async getUserTicket(ticket) {
        let userTicket = await Tickets.query()
            .where('id', ticket)
            .with('user', (builder) => {
                builder.setVisible(['id', 'email', 'username', 'photo'])
            })
            .first();
        return userTicket;
    }

    async checkTicket(ticket) {

        let check = await Tickets.query()
            .where('id', ticket)
            .update({
                is_used: true
            })
        return check;
    }


}

module.exports = TicketsRporitosy