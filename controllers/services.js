const knex = require('../knex/config/database');

async function createService(service) {
  try {
    const createdService = await knex('services').insert(service);
    return createdService;
  } catch (error) {
    throw error;
  }
}

async function updateService(id, updates) {
  try {
    const updatedService = await knex('services').where('id', id).update(updates);
    return updatedService;
  } catch (error) {
    throw error;
  }
}

async function deleteService(id) {
  try {
    const deletedService = await knex('services').where('id', id).del();
    return deletedService;
  } catch (error) {
    throw error;
  }
}

async function getAllServices() {
  try {
    const services = await knex('services').select('*');
    return services;
  } catch (error) {
    throw error;
  }
}

async function getServiceById(id) {
  try {
    const service = await knex('services').where('id', id).first();
    return service;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createService,
  updateService,
  deleteService,
  getAllServices,
  getServiceById,
};
