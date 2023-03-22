const express = require('express');
const { handleErrorMiddlewares } = require('./middlewares');
const routers = require('./routes');

const app = express();

app.use(express.json());
app.use(routers);
app.get('*', handleErrorMiddlewares.pageNotFound);
app.use(handleErrorMiddlewares.handleError);

module.exports = app;
