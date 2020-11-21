'use strict'

const AuthRepository = use("App/Repositories/AuthRepository");

class AuthController {

    async login({ request, response }) {

        try {

            let { email, password } = request.all();

            let authRepository = new AuthRepository();

            let user = await authRepository.authUser(email, password);

            if (user) {

                let token = await this.keyGen(100);

                await authRepository.updateToken(email, token);

                return response.status(200).send({ user, token })

            } else {
                return response.status(401).send({ message: 'UNAUTHORIZED' })
            }

        } catch (e) {
            console.log(e);
            return response.status(500).send(e);
        }

    }

    async keyGen(keyLength) {
        var i, key = "", characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

        var charactersLength = characters.length;

        for (i = 0; i < keyLength; i++) {
            key += characters.substr(Math.floor((Math.random() * charactersLength) + 1), 1);
        }

        return key;
    }


}

module.exports = AuthController
