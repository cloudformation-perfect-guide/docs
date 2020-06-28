const githubUrl = "https://github.com/cloudformation-perfect-guide/docs";

module.exports = {
  title: "CloudFormation 完全ガイド",
  tagline:
    "AWS CloudFormation 完全ガイドでは、AWS CloudFormation を使用したインフラリソースのプロビジョニングに関するTipsをまとめ、ベストプラクティスとして形式化します。",
  url: "https://github.com/cloudformation-perfect-guide/docs",
  baseUrl: "/",
  favicon: "img/favicon.png",
  organizationName: "cloudformation-perfect-guide",
  projectName: "cloudformation-perfect-guide",
  themeConfig: {
    navbar: {
      title: "CloudFormation 完全ガイド",
      logo: {
        alt: "Logo",
        src: "img/favicon.png",
      },
      links: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: githubUrl,
          label: "GitHub",
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
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "Second Doc",
              to: "docs/doc2/",
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
              href: githubUrl,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CloudFormation perfect guide. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          homePageId: "home",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/cloudformation-perfect-guide/docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
