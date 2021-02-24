'use strict'

const UserRepository = use("App/Repositories/UserRepository");

class UserController {

    async getAllUsers({ response }) {

        try {

            let userRepository = new UserRepository();
            let users = await userRepository.getAllUsers();
            return response.status(200).send(users);

        } catch (e) {
            console.log(e);
            return response.status(500).send(e);
        }

    }

}

module.exports = UserController
