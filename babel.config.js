module.exports = {
  ignore: ['**/*js-agent.js'],
  plugins: [['/tmp/engine/dotnet/v2/linux/babel-plugin.cjs', {
    ignore: ['**/node_modules/**']
  }]]
};
