const webpackMerge = require('webpack-merge');

const webpackConfig = env => {
  
  const sites = ['site1', 'site2', 'site3', 'site4'];
  
  const configs = sites.map((site) => {
    const context = { ...env, site };
    const commonConfig = require('./webpack.common.js')(context);
    const configEnv = env.NODE_ENV === 'prod' ? 'prod' : 'dev';
    const envConfig = require(`./webpack.config-${configEnv}.js`)(context);
    
    return webpackMerge({ mode: env.mode }, commonConfig, envConfig);
  });

  if (env.NODE_ENV !== 'prod') return configs[0];

  return configs;
};

module.exports = webpackConfig;
