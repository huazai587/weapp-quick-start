const path = require('path');
module.exports = {
  plugins: [
    'weapp-plugin-babel',
    [
      'weapp-plugin-require',
      {
        alias: {
          utils: path.resolve(__dirname, 'src/utils/'),
          components: path.resolve(__dirname, 'src/components/'),
          template: path.resolve(__dirname, 'src/template/'),
          page: path.resolve(__dirname, 'src/page/'),
        },
      },
    ],
    // 'weapp-plugin-less',
    // 'weapp-plugin-pug',
    'weapp-plugin-eslint',
  ],
  env: {
    production: {
      plugins: [
        [
          'weapp-plugin-jsmin',
          {
            extra: true,
            compress: {
              // warnings: false,
              // drop_debugger: true,
              // drop_console: true,
            },
          },
        ],
        [
          'weapp-plugin-postcss',
          {
            plugins: [
              require('autoprefixer')({
                browsers: ['Android >= 2.3', 'Chrome > 20', 'iOS >= 6'],
              }),
            ],
          },
        ],
        'weapp-plugin-filemin',
        'weapp-plugin-imgmin',
      ],
    },
  },
};
