const knex = require('../knex/config/database');

async function createOrder(order) {
  try {
    const createdOrder = await knex('orders').insert(order);
    return createdOrder;
  } catch (error) {
    throw error;
  }
}

async function updateOrder(id, updates) {
  try {
    const updatedOrder = await knex('orders').where('id', id).update(updates);
    return updatedOrder;
  } catch (error) {
    throw error;
  }
}

async function deleteOrder(id) {
  try {
    const deletedOrder = await knex('orders').where('id', id).del();
    return deletedOrder;
  } catch (error) {
    throw error;
  }
}

async function getAllOrders() {
  try {
    const orders = await knex('orders').select('*');
    return orders;
  } catch (error) {
    throw error;
  }
}

async function getOrderById(id) {
  try {
    const order = await knex('orders').where('id', id).first();
    return order;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createOrder,
  updateOrder,
  deleteOrder,
  getAllOrders,
  getOrderById,
};
