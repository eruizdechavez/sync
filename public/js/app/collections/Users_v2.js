(function (app) {
	app.collections = app.collections || {};

	app.collections.Users = Backbone.Collection.extend({
		url: '/api/v2/users',
		model: app.models.User
	});
}(window.app = window.app || {}));
