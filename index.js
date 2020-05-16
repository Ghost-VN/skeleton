const process = require('process');
const { server } = require('./app/app');

process.on('SIGTERM', () => {
    server.close(() => process.exit(0));
});
