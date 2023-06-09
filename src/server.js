const logger = require('./utils/logger');
const app = require('./app');

const PORT = process.env.NODE_ENV === 'production' ? process.env.PORT : process.env.API_PORT || 3000;

app.listen(PORT, () => {
  logger.info(`Up and running on PORT ${PORT} 🐶`);
});
