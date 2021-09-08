module.exports = {
  "stories": [
    '../src/app/components/**/*.stories.ts',
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-designs",
    "storybook-addons-abstract/register"
  ]
}
