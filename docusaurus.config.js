// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const url =
  process.env.NODE_ENV !== 'development'
    ? 'https://docs.cnosdb.com'
    : 'http://localhost:3000';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CnosDB',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: "https://python.langchain.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cnosdb', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
        label: 'English',
      },
      zh: {
        htmlLang: 'zh-Hans',
        label: '简体中文',

      }
            // 如果你不需要覆盖默认值，你可以忽略这个语言（比如 zh-Hans）
    },
  },
  scripts: [
    // community 页面引入
    {
      src: 'https://apps.elfsight.com/p/platform.js',
      defer: true,
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: false,
          lastVersion: 'current',
          versions: {
            current: {
              label: 'latest',
            },
            // '2.4': {
            //   label: '2.4',
            //   banner: 'none'
            // },
            // '2.3':{
            //     label: '2.3',
            //     banner:'none',
            // }
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/cnosdb/docs/edit/main",
          editLocalizedFiles: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        logo: {
          alt: 'Cnosdb',
          src: 'img/logo.png',
          srcDark: 'img/logo_dark.png',
          href: 'https://www.cnosdb.com',
        },
        items: [
          // left
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          
          {
            type: 'dropdown',
            label: 'Resources',
            position: 'left',
            items: [
              {
                label: 'Quick start',
                href: 'https://cnosdb.com',
              },
              {
                label: 'Eoo-integration',
                href: 'https://cnosdb.com',
              },
              {
                label: 'Release notes',
                href: 'https://cnosdb.com',
              },
              {
                label: 'FAQ',
                href: 'https://cnosdb.com',
              }
            ],
          },
          // right
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/cnosdb/docs',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        copyright: `CnosDB ©  ${new Date().getFullYear()}`,
      },
      algolia: {
        appId: '4O093YZHL1',
        apiKey: 'b02a6bb324334323de977f71e73d06d0',
        indexName: 'cnosdb',
        locales: {
          '/zh-CN/': {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消',
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除',
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接',
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者',
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈',
                },
              },
            },
          },
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
