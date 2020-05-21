module.exports = {
    app: {
        name: 'skeleton',
        version: '1.0.0',
        description: 'skeleton for projects',
    },
    server: {
        protocol: 'http',
        host: '127.0.0.1',
        port: 9999,
    },
    memcached: {
        host: '127.0.0.1',
        port: '11211',
    },
    database: {
        master:
            {
                host: '127.0.0.1',
                user: 'root',
                password: 'gtnhjdbx',
                port: '3306',
                database: 'sys',
                connectionLimit: 1,
            },

    },
    middlewares: {
        fromMysql: (response) => {
            const result = JSON.parse(JSON.stringify(response));
            return Array.isArray(result) ? result : [];
        },
    },

};
