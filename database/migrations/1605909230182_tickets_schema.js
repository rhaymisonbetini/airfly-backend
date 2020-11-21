'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TicketsSchema extends Schema {
  up () {
    this.create('tickets', (table) => {
      table.increments()
      table.string('dia_viagem').notNullable()
      table.string('hora_viagem').notNullable()
      table.string('origem').notNullable()
      table.string('destino').notNullable()
      table.string('aeronave').notNullable()
      table.string('codigo').notNullable()
      table.string('imagem_logo').notNullable()
      table.boolean('is_used').default(false)
      table.integer("user_id").unsigned().notNullable()
      table.timestamps()
    })
  }
  down () {
    this.drop('tickets')
  }
}

module.exports = TicketsSchema
