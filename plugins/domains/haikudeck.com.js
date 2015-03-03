module.exports = {

    mixins: [
        "oembed-title",
        "oembed-thumbnail",
        "oembed-site",
        "oembed-author",

        "oembed-video-responsive"
    ],

   getLink: function() {
        return {
            href: "http://static.haikudeck.com/images/haikudeck-icon.png",
            type: CONFIG.T.image,
            rel: CONFIG.R.icon
        };
    },

    tests: [{
        page: "http://www.haikudeck.com/gallery/featured",
        selector: "h4 a",
        skipMixins: ["oembed-author"]
    },
        "http://www.haikudeck.com/p/cvVNYemLrm/gone-viral---from-unbearably-boring-to-engaging-contagious-content",
        "http://www.haikudeck.com/did-you-know-business-presentation-GbC6DgD4kK"
    ]
};
