/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "Yoxo",
    sites: [
      {
        title: "Umami",
        description: "Umami 访问统计",
        url: "http://umami.yoxo.top/",
        icon: "https://pic-1.yoxo.top/umami1679541696502.webp",
        color: "#0171CD",
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
    title: "示例分类2",
  },
  {
    title: "示例分类3",
  },
  {
    title: "示例分类4",
  },
  {
    title: "示例分类5",
  },
  {
    title: "友情链接",
    sites: [
      {
        title: "EsunR Blog",
        description: "EsunR 的博客",
        url: "https://www.esunr.xyz",
        icon: "https://esunr-image-bed.oss-cn-beijing.aliyuncs.com/logo.jpg",
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
  BLOG_NAME: "EsunR-Blog",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://blog.esunr.xyz",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: null,
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/EsunR",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://api.dujin.org/bing/1920.php",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "京ICP证000001号",
  ICP_URL: "https://beian.miit.gov.cn/",
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
    title: "My Blog Index",
    keywords: "Blog, Index, Index Page",
    description: "This is my personal blog index page.",
  },
};

export default GLOBAL_CONFIG;
