var mockServer = require('node-mock-server');
var path = require('path');

mockServer({
  dirName: __dirname,
  title: 'MOCK SERVER',
  urlBase: 'http://localhost:3000',
  port: 3000,
  headers: {
    'Global-Custom-Header': 'Global-Custom-Header'
  }
});