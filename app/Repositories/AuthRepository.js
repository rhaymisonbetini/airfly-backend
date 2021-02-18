'use strict'

const User = use("App/Models/User");
const Hash = use("Hash");

class AuthRepository {

    async authUser(email, password) {

        let user = await User.query()
            .where('email', email)
            .setVisible(['id', 'email', 'username', 'photo', 'token'])
            .first()

        if (user) {
            let check = Hash.verify(password, user.password)
            if (check) {
                return user;
            } else {
                return false;
            }
        } else {
            return false;
        }

    }

    async authUserFiscal(email, password) {

        let user = await User.query()
            .where('email', email)
            .where('is_employee', true)
            .setVisible(['id', 'email', 'username', 'photo', 'token'])
            .first()

        if (user) {
            let check = Hash.verify(password, user.password)
            if (check) {
                return user;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    async updateToken(email, token) {
        await User.query()
            .where('email', email)
            .update({ token: token });
        return;
    }


    async create(user) {
        await User.create({
            username: 'Arthur MackGardem',
            email: 'arthur@hotmail.com',
            password: await Hash.make('123456'),
            photo: 'https://extra.globo.com/incoming/24122151-cfc-63d/w488h275-PROP/gabimesq_74962054_457668948269758_5980308825334032589_n.jpg',
            active: true,
            is_employee: true
        })
    }


}

module.exports = AuthRepository;
