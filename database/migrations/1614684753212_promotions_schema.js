'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PromotionsSchema extends Schema {
  up () {
    this.create('promotions', (table) => {
      table.increments()
      table.timestamps()
      table.text('banner')
    })
  }

  down () {
    this.drop('promotions')
  }
}

module.exports = PromotionsSchema
