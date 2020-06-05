const query = require('mysql-query-promise');
const { fromMysql } = require('config').middlewares;


module.exports = {
    create: (param) => {     
        let { name, email, phone } = param;

        const qs = `INSERT INTO users (name, email, phone) 
                    VALUES (?, ?, ?);`;

        return query(qs, [name, email, phone]).then(res => fromMysql(res));
    },

    read: () => {       
        const qs = `select * from users;`;

        return query(qs).then(res => fromMysql(res));
    },

    update: (param) => {   
        let { id, email, phone } = param;

        const qs = `UPDATE users 
                           SET email = ?, phone = ? 
                           WHERE (id = ?);`;                         

        return query(qs, [email, phone, id]).then(res => fromMysql(res));
    },

    delete: (param) => {  
        let { id } = param;

        const qs = `DELETE FROM users WHERE id = ?`;

        return query(qs, [id]).then(res => fromMysql(res));
    },
};




