module.exports = {
  navigationFallback: {
    rewrite: '/index.html',
    exclude: ['/images/*.{png,jpg,gif,ico}', '/*.{css,scss,js,json}']
  },
  routes: [
    {
      route: '/api/*',
      allowedRoles: ['anonymous']
    },
    {
      route: '/*',
      serve: '/index.html',
      statusCode: 200
    }
  ],
  responseOverrides: {
    "404": {
      "rewrite": "/index.html",
      "statusCode": 200
    }
  },
  globalHeaders: {
    'cache-control': 'no-cache'
  },
  mimeTypes: {
    '.json': 'application/json',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.html': 'text/html',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.ico': 'image/x-icon'
  }
};