module.exports = {
  ignore: ['**/*js-agent.js'],
  plugins: [['/tmp/engine/dotnet/v2/linux/babel-plugin.js', {
    ignore: ['**/node_modules/**']
  }]]
};
