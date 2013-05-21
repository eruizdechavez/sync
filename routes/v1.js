var users = require('../models/users');

var users_controller = function(req, res) {
  switch (req.body.action) {
    case 'create':
      return create_user(req, res);
      break;

    case 'read':
      return read_user(req, res);
      break;

    case 'update':
      return update_user(req, res);
      break;

    case 'delete':
      return delete_user(req, res);
      break;

    default:
      return res.json(null, 404);
  }
};

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
  app.post('/api/v1/users', users_controller);
};
