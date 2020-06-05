const query = require('mysql-query-promise');
const { fromMysql } = require('config').middlewares;

module.exports = {
    getSys: () => {       
        const qs = `select * from sys.sys_config;`;
        return query(qs).then(res => fromMysql(res));
    },
};




