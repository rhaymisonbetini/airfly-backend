'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const User = use("App/Models/User");

class Authenticator {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request }, next) {

    let token = request.header('Authorization');
    let email = request.header('Email');

    let auth = await User.query()
      .where('email', email)
      .where('token', token)
      .first()
    if (auth.email && auth.token) {
      await next()
    } else {
      return response.status(401).send({ message: 'UNAUTHORIZED' })
    }
  }


}
}

module.exports = Authenticator
