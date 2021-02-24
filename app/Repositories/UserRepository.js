'use strict'

const User = use("App/Models/User")

class UserRepository{

    async getAllUsers(){
        return await User.query().where('is_employee', false).fetch();
    }


}
module.exports = UserRepository;