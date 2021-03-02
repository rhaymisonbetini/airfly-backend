'use strict'
const Helpers = use('Helpers')

class ImageController {
    async show({ params, response }) {
        const path = Helpers.appRoot(params.path)
      
          return response.download(path)
    }
}

module.exports = ImageController
