module.exports = {
  addons: [
    '@storybook/addon-actions/register', 
    '@storybook/addon-viewport/register', 
    '@harelpls/storybook-addon-materialui/register'
  ],
  stories: ['../stories/*.stories.[tj]sx']
};
