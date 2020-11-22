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


}

module.exports = AuthRepository;
