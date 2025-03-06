module.exports = {
  ignore: ['**/*js-agent.js'],
  plugins: [['./babel-plugin.js', {
    ignore: ['**/node_modules/**']
  }]]
};
