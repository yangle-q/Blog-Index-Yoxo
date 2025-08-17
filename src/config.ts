/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "Yoxo 后台管理",
    sites: [
      {
        title: "Umami",
        description: "Umami 访问统计",
        url: "http://umami.yoxo.top/",
        icon: "https://pic-1.yoxo.top/umami1679541696502.webp",
      },
      {
        title: "Picx",
        description: "Picx 图床",
        url: "http://picx.yoxo.top/",
        icon: "https://picx.yoxo.top/logo.png",
      },
      {
        title: "Files Storage",
        description: "博客文件存储",
        url: "http://files.yoxo.top/",
        icon: "",
      },
      {
        title: "Live2d",
        description: "Live2d 人物",
        url: "http://live2d.yoxo.top/",
        icon: "https://live2d.yoxo.top/avatar.png",
      },
      {
        title: "Waline",
        description: "Waline 评论示例",
        url: "http://waline.yoxo.top/",
        icon: "https://waline.js.org/logo.png",
      },
      {
        title: "Twikoo",
        description: "Twikoo EnvID",
        url: "http://twikoo.yoxo.top/",
        icon: "	https://twikoo.js.org/twikoo-logo-home.png",
      },
      {
        title: "Baota Linux",
        description: "宝塔Linux面板",
        url: "http://bt.yoxo.top/",
        icon: "https://www.bt.cn/favicon.ico",
      },
    ],
  },
  {
    title: "域名/项目托管",
    sites: [
      {
        title: "CloudFlare",
        description: "CloudFlare 面板",
        url: "https://dash.cloudflare.com/01c51e722ad19c896e60f0ca5105f9e5/",
        icon: "https://pic-1.yoxo.top/OIP-C.webp",
      },
      {
        title: "Vercel",
        description: "Vercel 面板",
        url: "https://vercel.com/yangle-qs-projects/",
        icon: "https://pic-1.yoxo.top/OIP-C.webp",
      },
      {
        title: "Aliyun",
        description: "Aliyun 域名管理面板",
        url: "https://dc.console.aliyun.com/",
        icon: "https://pic-1.yoxo.top/26753533_143624534221_2.webp",
      },
      {
        title: "Github",
        description: "Github 个人主页",
        url: "https://github.com/yangle-q/",
        icon: "https://pic-1.yoxo.top/Github.webp",
      },
    ],
  },
  {
    title: "我的主页",
    sites: [
      {
        title: "柠檬星 | 主页",
        description: "我的个人主页",
        url: "https://lemonstar.me/",
        icon: "https://blog.lemonstar.me/img/site-icon-lemon.png",
      },
      {
        title: "HelloFrom.cn 主页",
        description: "HelloFrom.cn 主页",
        url: "https://www.hellofrom.cn/",
        icon: "https://www.hellofrom.cn/images/icon/logo.png",
      },
    ],
  },
];

/** Website 配置（2023.3.29 已废弃） */
const WEBSITE_ITEMS: WebsiteItem[] = [];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "Lemonstar-blog",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://blog.lemonstar.me",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: null,
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/yangle-q",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://api.nsmao.net/api/Img/query?key=gc6TEriwaawWhE996zfZgfqltb&sort=acg",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "",
  ICP_URL: "",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "欢迎拜访",
    "歡迎拜訪",
    "Welcome, my friend!",
    "訪問へようこそ",
    "嗨，别来无恙",
    "不忘初心，一生浪漫",
    "最近还好吗？",
    "流星，落花，萤火",
    "马车越空，晃荡越响",
  ],
  /**
   * Website 分类配置
   */
  WEBSITE_SORTS,
  /**
   * Website 配置（2023.3.29 已废弃）
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "Yoxo Index",
    keywords: "Blog, Index, Index Page",
    description: "This is Yoxo backend index page.",
  },
};

export default GLOBAL_CONFIG;
