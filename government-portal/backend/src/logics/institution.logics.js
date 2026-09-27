const q = require("../queries/institution.queries");
module.exports = {
  getAll: () => q.getAll(),
  create: data => q.create(data),
  update: (id, data) => q.update(id, data),
  remove: id => q.remove(id)
};
