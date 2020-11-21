'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Ticket extends Model {

    static get table() {
        return "tickets";
    }


    user() {
        return this.belongsTo("App/Models/User");
    }

}



module.exports = Ticket
