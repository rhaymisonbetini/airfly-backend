
const Tickets = use("App/Models/Ticket")

class TicketsRporitosy {

    async allTickets(){
        return await Tickets.all();
    }

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

    async checkTicket(code) {
        let check = await Tickets.query()
            .where('codigo', code)
            .update({
                is_used: true
            })
        return check;
    }


    async getUserByQrCode(code) {
        let userTicket = await Tickets.query()
            .where('codigo', code)
            .with('user', (builder) => {
                builder.setVisible(['id', 'email', 'username', 'photo'])
            })
            .first();
        return userTicket;
    }

    async verifyConsumer(code) {
        let tickets = await Tickets.query()
            .where('codigo', code)
            .where('is_used', true)
            .first();
        return tickets;

    }
}

module.exports = TicketsRporitosy