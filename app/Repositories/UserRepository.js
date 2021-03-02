'use strict'

const User = use("App/Models/User")
const Env = use('Env')

class UserRepository {

    async getAllUsers() {
        return await User.query().where('is_employee', false).fetch();
    }

    async getAuthUserById(id) {
        return await User.find(id);
    }

    async updateUser(filePath, user) {

        return await User.query().where('id', user.id).update({
            username: user.userNam,
            email: user.email,
            photo: `${Env.get('APP_URL')}/users/${filePath}`
        })

    }


}
module.exports = UserRepository;