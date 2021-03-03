
const Tickets = use("App/Models/Ticket")

class TicketsRporitosy {

    async allTickets() {
        return await Tickets.all();
    }

    async countAllTickets() {
        return await Tickets.getCount();
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

    async createTicketWeb(ticketReived) {

        let ticket = ticketReived;

        let newTicket = await Tickets.create({
            dia_viagem: ticket.dia,
            hora_viagem: ticket.time,
            origem: ticket.origem,
            destino: ticket.destino,
            aeronave: 'Airbus A320',
            codigo: Math.floor(Math.random() * 99999999999),
            imagem_logo: 'https://image.freepik.com/fotos-gratis/aviao-decolando-do-aeroporto_37416-3.jpg',
            user_id: ticket.user,
            is_used: false
        })

        return newTicket;
    }

    async updateTicket(ticket) {
        return await Tickets.query().where('id', ticket.id).update({
            origem: ticket.origem,
            destino: ticket.destino,
            dia_viagem: ticket.dia
        })

    }

    async deleteTicketById(id) {
        const ticket = await Tickets.find(id);
        await ticket.delete();
        return ticket;
    }

    async getActualDate() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        return today;
    }
}

module.exports = TicketsRporitosy