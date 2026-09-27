const q = require("../queries/media.queries");
module.exports = {
  getAll: () => q.getAll(),
  create: data => q.create(data),
  update: (id, data) => q.update(id, data),
  remove: id => q.remove(id)
};
