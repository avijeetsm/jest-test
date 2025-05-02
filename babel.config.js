module.exports = {
  ignore: ['**/*js-agent.js'],
  plugins: [['/addon/bin/v2/dotnet/linux/babel-plugin.cjs', {
    ignore: ['**/node_modules/**']
  }]]
};
