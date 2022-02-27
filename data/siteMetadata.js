/*
 * @Description:
 * @Autor: Blueheart
 * @Date: 2022-02-20 14:05:18
 * @LastEditTime: 2022-02-20 14:39:12
 * @FilePath: \honghong.me-1.0.5\data\siteMetadata.js
 */
const siteMetadata = {
    title: "zhLeon521",
    author: "zhLeon521",
    headerTitle: "zhLeon521",
    description:
        "zhLeon521的个人网站 - zhLeon521 Blog balbbababababbabababbaahalalalallla。",
    language: "zh-CN",
    theme: "system", // system, dark or light
    siteUrl: "https://blog.csdn.net/shengshengshiwo",
    siteRepo: "https://github.com/zhLeon521",
    siteLogo: "/static/images/HONG.png",
    image: "/static/images/avatar.png",
    socialBanner: "/static/images/twitter-card.png",
    email: "info@2321837783@qq.com",
    github: "https://github.com/zhLeon521",
    // twitter: "https://twitter.com/TszhongLai0411",
    // facebook: "https://www.facebook.com/tszhonglai.0411",
    // youtube: "https://www.youtube.com/channel/UC2hMWOaOlk9vrkvFVaGmn0Q",
    // instagram: "https://www.instagram.com/tszhong0411",
    locale: "zh-CN",
    analytics: {
        // supports plausible, simpleAnalytics, umami or googleAnalytics
        plausibleDataDomain: "", // e.g. tailwind-nextjs-starter-blog.vercel.app
        simpleAnalytics: false, // true or false
        umamiWebsiteId: "", // e.g. 123e4567-e89b-12d3-a456-426614174000
        googleAnalyticsId: "UA-185110551-5", // e.g. UA-000000-2 or G-XXXXXXX
    },
    newsletter: {
        // supports mailchimp, buttondown, convertkit, klaviyo
        // Please add your .env file and modify it according to your selection
        provider: "",
    },
    comment: {
        enableLoadComments: false,
        // Select a provider and use the environment variables associated to it
        // https://vercel.com/docs/environment-variables
        provider: "giscus", // supported providers: giscus, utterances, disqus
        giscusConfig: {
            // Visit the link below, and follow the steps in the 'configuration' section
            // https://giscus.app/
            repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
            repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
            category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
            categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
            mapping: "pathname", // supported options: pathname, url, title
            reactions: "1", // Emoji reactions: 1 = enable / 0 = disable
            // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
            metadata: "0",
            // theme example: light, dark, dark_dimmed, dark_high_contrast
            // transparent_dark, preferred_color_scheme, custom
            theme: "light",
            // theme when dark mode
            darkTheme: "dark",
            // If the theme option above is set to 'custom`
            // please provide a link below to your custom theme css file.
            // example: https://giscus.app/themes/custom_example.css
            themeURL: "",
            // language
            lang: "zh-CN",
        },
        utterancesConfig: {
            // Visit the link below, and follow the steps in the 'configuration' section
            // https://utteranc.es/
            repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
            issueTerm: "", // supported options: pathname, url, title
            label: "", // label (optional): Comment 💬
            // theme example: github-light, github-dark, preferred-color-scheme
            // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
            theme: "",
            // theme when dark mode
            darkTheme: "",
        },
        disqusConfig: {
            // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
            shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
        },
    },
};

module.exports = siteMetadata;
