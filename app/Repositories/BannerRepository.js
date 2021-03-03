'use strict'

const Promotions = use("App/Models/Promotion");

class BannerRepository {

    getBanners() {
        return Promotions.all();
    }

}

module.exports = BannerRepository;