const knex = require('../knex/config/database');

async function createUser(user) {
  try {
    const createdUser = await knex('users').insert(user);
    return createdUser;
  } catch (error) {
    throw error;
  }
}

async function updateUser(id, updates) {
  try {
    const updatedUser = await knex('users').where('id', id).update(updates);
    return updatedUser;
  } catch (error) {
    throw error;
  }
}

async function deleteUser(id) {
  try {
    const deletedUser = await knex('users').where('id', id).del();
    return deletedUser;
  } catch (error) {
    throw error;
  }
}

async function getAllUsers() {
  try {
    const users = await knex('users').select('*');
    return users;
  } catch (error) {
    throw error;
  }
}

async function getUserById(id) {
  try {
    const user = await knex('users').where('id', id).first();
    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getUserById,
};
