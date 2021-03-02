'use strict'

const UserRepository = use("App/Repositories/UserRepository");
const UploadRepository = use("App/Repositories/UploadRepository");

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

    async getAuthUser({ params, response }) {
        try {
            let userRepository = new UserRepository();
            let authUser = await userRepository.getAuthUserById(params.user);
            return response.status(200).send(authUser);
        } catch (e) {
            console.log(e);
            return response.status(500).send(e);
        }
    }

    async updateUserPrifle({ request, response }) {
        try {

            let file = request.file('file', { types: ['image'] });
            let user = request.all();
            let fileName;

            if (file) {
                let uploadRepository = new UploadRepository();
                let resp = await uploadRepository.uploadData('users', file)
                if (resp === 'error') {
                    return response.status(500).send('ERRO_UPLOAD_FILE');
                } else {
                    fileName = resp;
                }
            }

            let userRepository = new UserRepository();

            await userRepository.updateUser(fileName, user);
            let updatedUser = await userRepository.getAuthUserById(user.id);
            return response.status(200).send(updatedUser);


        } catch (e) {
            console.log(e);
            return response.status(500).send(e);
        }
    }

    async

}

module.exports = UserController
