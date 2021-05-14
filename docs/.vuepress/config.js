module.exports = {
  lang: 'zh-CN',
  title: 'CAT-UI',
  description: 'an ui of vue3.X',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/icon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  //base: '/web_accumulate/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  port: 8087,
  themeConfig: {
    navbar:[
      { text: '博客', link: 'https://juneblueberry.github.io/' }, // 外部链接
      { text: 'GitHub',link: 'https://github.com/JuneBlueberry/cats-ui.git'} // 下拉列表       
    ],
    // 为以下路由添加侧边栏
    sidebar: 'auto',
    sidebarDepth: 2,
    sidebar:[
      // SidebarItem
      {
        text: 'Foo',
        link: '/foo/',
        children: [
          // SidebarItem
          {
            text: 'github',
            link: 'https://github.com',
            children: [],
          },
          // 字符串 - 页面文件路径
          '/foo/bar.md',
        ],
      },
      // SidebarGroup
      {
        isGroup: true,
        text: 'Group',
        children: ['/group/foo.md', '/group/bar.md'],
      },
      // 字符串 - 页面文件路径
      '/bar/README.md',
    ],
  }
}