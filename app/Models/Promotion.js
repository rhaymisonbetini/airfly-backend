'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Promotion extends Model {

    static get table() {
        return "promotions";
    }

}

module.exports = Promotion
