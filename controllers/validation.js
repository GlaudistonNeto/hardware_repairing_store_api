// validation.js
module.exports = {
  existsOrError(value, msg) {
    if (!value) throw msg;
    if (Array.isArray(value) && value.length === 0) throw msg;
    if (typeof value === 'string' && !value.trim()) throw msg;
  },

  notExistsOrError(value, msg) {
    try {
      this.existsOrError(value, msg);
    } catch (error) {
      return;
    }
    throw msg;
  },

  equalsOrError(valueA, valueB, msg) {
    if (valueA !== valueB) throw msg;
  },

  strongPassword(value, msg) {
    if (!value) throw msg;
    if (Array.isArray(value) && value.length === 0) throw msg;
    if (typeof value === 'string' && !value.trim()) throw msg;
    if (value.length < 6) throw msg;
  },
};
