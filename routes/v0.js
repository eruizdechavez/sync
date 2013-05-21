var users = require('../models/users');

var read_user = function read_user(req, res) {
  var user = users.read_user(req.body.id);
  if (user) {
    return res.json(user);
  }
  return res.json(404);
};

var create_user = function create_user(req, res) {
  return res.send(users.create_user(req.body));
};

var update_user = function update_user(req, res) {
  return res.send(users.update_user(req.body.id, req.body));
};

var delete_user = function delete_user(req, res) {
  return res.send(users.delete_user(req.body.id));
};

exports.initialize = function (app) {
  app.post('/api/v0/create_user', create_user);
  app.get('/api/v0/read_users', read_user);
  app.get('/api/v0/read_user', read_user);
  app.post('/api/v0/update_user', update_user);
  app.post('/api/v0/delete_user', delete_user);
};
