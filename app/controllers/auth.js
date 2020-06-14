const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const User = require('../models/User');

module.exports = {

      register: async (ctx) => {
            const { name, email, password } = ctx.request.body;
            const user = await User.findOne({ email });
            if (user) {
                  ctx.throw(400, 'Email elready exists')
            };
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);
            await new User({ email, name, password: hash }).save()
            ctx.status = 201;
      },

      login: async (ctx) => {
            const { email, password } = ctx.request.body;
            const user = await User.findOne({ email });
            if (!user) {
                  ctx.throw(400, `User ${email} does not exist`)
            };
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                  const payload = {
                        id: user.id,
                        name: user.name,
                        email: user.email 
                  }
                  const token = jwt.sign(payload, config.secret, { expiresIn: 3600 * 24 })
                  ctx.body = { token: `Bearer ${token}` }
            }else{
                  ctx.throw(400, `Incorrect password`);
            }
      }
}



