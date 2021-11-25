// const CompressPlugin = require('compress-webpack-plugin'); // 내장되서 더이상 쓸 필요 없음
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  compress: true, // CompressPlugin를 대신 설정해줌.
  webpack(config, { webpack }) {
    const prod = process.env.NODE_ENV === 'production';
    const plugins = [
      ...config.plugins,
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/),
    ];
    // if (prod) {
    //   plugins.push(new CompressPlugin()); // 내장되서 더이상 쓸 필요 없음
    // }
    return {
      ...config,
      mode: prod ? 'production' : 'development',
      devtool: prod ? 'hidden-source-map' : 'eval',
      plugins,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules, {},
        ],
      },
    };
  },
});
