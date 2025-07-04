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
}