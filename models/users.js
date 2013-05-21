/*global _:true*/
// Methods are exported explicitly at the end of this file.
var _ = require('underscore');

var users = {};
var last_id = 0;

var User = function User(data) {
	this.id = data.id || 0;
	this.name = data.name || "";
	this.email = data.email || "";
	this.password = data.password || "";
	return this;
};

var create_user = function create_user(params) {
	var user = new User(params);
	user.id = last_id = last_id + 1;
	users[last_id] = user;
	return user;
};

var read_user = function read_user(id) {
	var user = null;

	if (!id) {
		user = _.toArray(users);
	} else if (users[id]) {
		user = users[id];
	}

	return user;
};

var update_user = function update_user(id, params) {
	var user = read_user(id);

	if(!user || user.length) {
		return null;
	}

	user.name = params.name || user.name;
	user.email = params.email || user.email;
	user.password = params.password || user.password;

	return user;
};

var delete_user = function delete_user(id) {
	delete users[id];
	return true;
};

exports.create_user = create_user;
exports.read_user = read_user;
exports.update_user = update_user;
exports.delete_user = delete_user;
