const { withTamagui } = require('@tamagui/next-plugin')
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

// module.exports = withNextra()

module.exports = function (name, { defaultConfig }) {
  let config = {
    ...defaultConfig,
    // ...your configuration
  }
  const tamaguiPlugin = withTamagui({
    config: './tamagui.config.ts',
    components: ['tamagui'],
  })
  return {
    ...config,
    ...tamaguiPlugin(config),
    ...withNextra()
  }
}