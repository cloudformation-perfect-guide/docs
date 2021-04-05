const githubUrl = "https://github.com/cloudformation-perfect-guide";

module.exports = {
  title: "CloudFormation 完全ガイド",
  tagline:
    "AWS CloudFormation 完全ガイドでは、AWS CloudFormation を使用したインフラリソースのプロビジョニングに関するTipsをまとめ、ベストプラクティスとして形式化します。",
  url: "https://cloudformation-perfect-guide.netlify.com",
  baseUrl: "/",
  favicon: "img/favicon.png",
  organizationName: "cloudformation-perfect-guide",
  projectName: "docs",
  plugins: ["@docusaurus/plugin-google-analytics"],
  themeConfig: {
    googleAnalytics: {
      trackingID: "G-9SJVFYM4KS",
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    image: "img/home.png",
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
              label: "Home",
              to: "docs/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/gee0awa",
            },
            {
              label: "Slack",
              href: "https://slack.com/todo",
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
          editUrl:
            "https://github.com/cloudformation-perfect-guide/docs/edit/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
