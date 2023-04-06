const models = require('../models');

class UserServices  {
    static async add(body) {
        try {
            const user = await models.User.create(body);
    } catch (error) {
        throw error
    }
  }
}
