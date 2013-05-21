var users = require('../models/users');

var read_user = function read_user(req, res) {
  var user = users.read_user(req.params.id);
  if (user) {
    return res.json(user);
  }
  return res.json(404);
};

var create_user = function create_user(req, res) {
  return res.send(users.create_user(req.body));
};

var update_user = function update_user(req, res) {
  return res.send(users.update_user(req.params.id, req.body));
};

var delete_user = function delete_user(req, res) {
  return res.send(users.delete_user(req.params.id));
};

exports.initialize = function (app) {
  app.post('/api/v2/users', create_user);
  app.get('/api/v2/users/:id?', read_user);
  app.put('/api/v2/users/:id', update_user);
  app.del('/api/v2/users/:id', delete_user);
};
