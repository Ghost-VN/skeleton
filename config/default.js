module.exports = {
    server: {
        protocol: 'http',
        host: '127.0.0.1',
        port: 9999
    },
    app: {
        name: 'skeleton',
        version: '1.0.0',
        description: 'skeleton for projects'
    },
    secret: process.env.SECRET || 'secret',
    database: {
        master:
        {
            host: "127.0.0.1",
            user: "root",
            password: "gtnhjdbx",
            port: "3306",
            database: "sys",
            connectionLimit: 1
        },
        mongo: {
            mongoURI: process.env.MONGO_URI
        }
    },
    middlewares: {
        fromMysql: (response) => {
            let result = JSON.parse(JSON.stringify(response));
            return Array.isArray(result) ? result : [];
        }
    }

}

