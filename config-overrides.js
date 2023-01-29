const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@/ui': path.resolve(__dirname, 'src/ui/'),
      '@/modules': path.resolve(__dirname, 'src/modules/'),
      '@/routes': path.resolve(__dirname, 'src/routes/'),
      '@/pages': path.resolve(__dirname, 'src/pages/'),
      '@/providers': path.resolve(__dirname, 'src/providers/'),
      '@/libs': path.resolve(__dirname, 'src/libs/'),
      '@/theme': path.resolve(__dirname, 'src/theme/'),
    },
  };

  return config;
};
