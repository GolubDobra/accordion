export default (config, env) => {
  supportCssModulesNotOnlyInComponentFolder(config, env)
  addAvifSupport(config)
}

function supportCssModulesNotOnlyInComponentFolder(config, env) {
  const appStyleRule = config.module.rules.find(({ test, include }) => test.test('.css') && include)
  appStyleRule.include.push(env.source('Accordion'))
  const otherStyleRule = config.module.rules.find(
    ({ test, exclude }) => test.test('.css') && exclude
  )
  otherStyleRule.exclude.push(env.source('Accordion'))
}

function addAvifSupport(config) {
  config.module.rules.push({ test: /\.avif$/, loader: ['file-loader'] })
}
