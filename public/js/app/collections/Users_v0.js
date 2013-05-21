(function (app) {
	Backbone.emulateJSON = true;

	app.collections = app.collections || {};

	app.collections.Users = Backbone.Collection.extend({
		model: app.models.User,

		sync: function (method, model, options) {
			switch (method) {
				case 'read':
					$.ajax(_.extend({
						url: '/api/v0/read_users'
					}, options));
					break;
			}
		}
	});
}(window.app = window.app || {}));