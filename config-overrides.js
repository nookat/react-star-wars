const { alias } = require('react-app-rewire-alias')

module.exports = function override(config, env) {
  alias({
    '@components': 'src/components',
    '@ui': 'src/components/UI',
    '@constants': 'src/constants',
    '@hoc-helpers': 'src/hoc-helpers',
    '@services': 'src/services',
    '@containers': 'src/containers',
    '@routes': 'src/routes',
    '@utils': 'src/utils',
    '@styles': 'src/styles',
    '@static': 'src/static',
    '@hooks': 'src/hooks',
    '@store': 'src/store',
    '@context': 'src/context',
  })(config)

  return config
}

