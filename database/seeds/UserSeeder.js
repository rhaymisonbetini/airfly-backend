'use strict'

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use("App/Models/User");
const Tickets = use("App/Models/Ticket");
const Hash = use("Hash")

class UserSeeder {
  async run() {

    let user = await User.create({
      username: 'Rhaymison Betini',
      email: 'rhaymison@hotmail.com',
      password: await Hash.make('123456'),
      photo: 'https://avatars2.githubusercontent.com/u/45121694?s=460&u=44fff97784f6914ec218fbc422f73cb61be87254&v=4',
      active: true,
      is_employee: false
    })

    await User.create({
      username: 'Arthur MackGardem',
      email: 'arthur@hotmail.com',
      password: await Hash.make('123456'),
      photo: 'https://extra.globo.com/incoming/24122151-cfc-63d/w488h275-PROP/gabimesq_74962054_457668948269758_5980308825334032589_n.jpg',
      active: true,
      is_employee: true
    })

    await Tickets.create({
      dia_viagem: '22/11/2020',
      hora_viagem: '18:45',
      origem: 'Aracaju - SE',
      destino: 'Vitória - ES',
      aeronave: 'Airbus A320',
      codigo: '29140669',
      imagem_logo: 'https://image.freepik.com/fotos-gratis/aviao-decolando-do-aeroporto_37416-3.jpg',
      user_id: user.id,
      is_used: false
    })

    await Tickets.create({
      dia_viagem: '25/12/2020',
      hora_viagem: '20:00',
      origem: 'Vitória - ES',
      destino: 'Aracaju - SE',
      aeronave: 'Boeing 787',
      codigo: '789214667',
      imagem_logo: 'https://www.midiamax.com.br/wp-content/uploads/2017/04/destaque_aviao.png',
      user_id: user.id,
      is_used: false
    })

  }
}

module.exports = UserSeeder
