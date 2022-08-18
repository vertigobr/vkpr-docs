const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "VKPR",
    tagline: "Vertigo Kubernetes Production Runtime",
    url: "https://vertigobr.github.io",
    // baseUrl: '/vkpr-docs/',
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "https://vertigo.com.br/wp-content/uploads/favicon.png",
    organizationName: "vertigobr", // Usually your GitHub org/user name.
    projectName: "vkpr-docs", // Usually your repo name.

    i18n: {
      defaultLocale: "en",
      locales: ["en", "pt"],
      localeConfigs: {
        en: {
          label: "English",
          direction: "ltr",
        },
        pt: {
          label: "Português",
          direction: "ltr",
        },
      },
    },

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
            editUrl:
              "https://github.com/facebook/docusaurus/edit/main/website/",
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: "VKPR",
          logo: {
            alt: "VKPR Logo",
            src: "img/vtg-dark.svg",
            srcDark: "img/vtg-light.svg",
          },
          items: [
            {
              type: "doc",
              docId: "intro",
              position: "left",
              label: "Documentation",
            },
            {
              href: "https://github.com/vertigobr/vkpr-cli",
              label: "GitHub",
              position: "right",
            },
            {
              type: "localeDropdown",
              position: "right",
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Docs",
              items: [
                {
                  label: "Tutorial",
                  to: "/docs/intro",
                },
              ],
            },
            {
              title: "Community",
              items: [
                {
                  label: "Stack Overflow",
                  href: "https://stackoverflow.com/questions/tagged/docusaurus",
                },
                {
                  label: "Discord",
                  href: "https://discordapp.com/invite/docusaurus",
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com/docusaurus",
                },
              ],
            },
            {
              title: "More",
              items: [
                {
                  label: "GitHub",
                  href: "https://github.com/facebook/docusaurus",
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Vertigo Tecnologia. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
