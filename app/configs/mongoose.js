const config   = require('config');
const mongoose = require('mongoose');

const { mongoURI } = config.database.mongo;

module.exports = () => {
    mongoose
            .set('useCreateIndex', true)
            .connect(mongoURI, { useUnifiedTopology: true, useNewUrlParser: true })
            .then((() => console.log('MongoDB has been connected')))
            .catch(error => console.error(`MongoDB connection error --- ${error.toString()}`))
}
