const { resolve } = require('path');

module.exports = async function module(moduleOptions) {
  const options = Object.assign({}, moduleOptions);

  this.addPlugin({
    src: resolve(__dirname, 'templates/plugin.js'),
    fileName: 'vue-amplitude-plugin.js',
    options,
    ssr: false,
  });
};
module.exports.meta = require('../package.json');
