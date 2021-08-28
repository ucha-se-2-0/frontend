require('babel-register');
 
const router = require('./Router').default;
const Sitemap = require('../').default;
 
(
    new Sitemap(router)
        .build('http://julemy.bg')
        .save('./sitemap.xml')
);