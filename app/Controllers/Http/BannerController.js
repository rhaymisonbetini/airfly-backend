'use strict'

const BannerRepository = use('App/Repositories/BannerRepository');

class BannerController {

    async getBanners({ response }) {

        try {

            let bannerRepository = new BannerRepository();
            let banners = await bannerRepository.getBanners();

            banners = banners.toJSON();
            let formatedBanners = [];

            banners.forEach(banner => {
                formatedBanners.push({ path: banner.banner })
            });

            return response.status(200).send(formatedBanners);

        } catch (e) {
            console.log(e);
            return response.status(500).send(e);
        }

    }

}

module.exports = BannerController
