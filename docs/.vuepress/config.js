const moment = require('moment');

module.exports = {
    title: 'undercat\'s blog',
    description: 'A blog about web development, programming, and technology',
    theme: 'reco',
    base: '/undercat_blog/',
    themeConfig: {
        lastUpdated: '上次更新',
        nav: [
            { text: '首页', link: '/' },
            { 
                text: 'undercat的博客', 
                items: [
                    { text: 'Github', link: 'https://github.com/chronicle12345' },
                ]
            }
        ],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
              title: "基础学习",
              path: '/handbook/ConditionalTypes',
              collapsable: false, // 不折叠
              children: [
                { title: "条件类型", path: "/handbook/ConditionalTypes" },
                { title: "泛型", path: "/handbook/Generics" }
              ],
            }
        ],
        subSidebar: 'auto'
    },
    locales: {
        '/': {
        lang: 'zh-CN'
        }
    },
    plugins: [
        [
            // '@vuepress/last-updated',
            // {
            //     transformer: (timestamp, lang) => {
            //         // 不要忘了安装 moment
            //         const moment = require('moment')
            //         moment.locale(lang)
            //         return moment(timestamp).fromNow()
            //     }
            // }
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                return new Date(timestamp).toLocaleDateString();
                }
            }
        ],
        [
            require('./vuepress-plugin-code-copy'),
            {
                copybuttonText: '复制',
                copiedButtonText: '已复制！'
            }
        ],
        [
            'sitemap',
            {
                hostname: 'https://chronicle12345.github.io/undercat_blog/'
            }
        ]
    ]
}