'use strict'

const Helpers = use('Helpers')


class UploadRepository {

    async uploadData(path, file) {
        
        await  file.move(Helpers.publicPath(path), {
            name: (Math.floor(Math.random() *  10000000)).toString(),
            overwrite: true
        })

        if (!file.moved()) {
            return 'error'
        }

        return file.fileName;
    }

}


module.exports = UploadRepository