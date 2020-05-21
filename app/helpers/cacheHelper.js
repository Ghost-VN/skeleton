const { host, port } = require('config').memcached;

const Memcached = require('memcached');
const cache = new Memcached(`${host}:${port}`);

const get = (key) => new Promise((resolve, reject) => {
  cache.get(key, (err, res) => {
    if (err) reject(err);
    resolve(res);
  })
});

const set = (key, str, ttl) => new Promise((resolve, reject) => {
  cache.set(key, str, ttl, (err, res) => {
    if (err) reject(err);
    resolve(res);
  })
});

module.exports = {
  get, set,
};
