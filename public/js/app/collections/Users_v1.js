(function (app) {
	Backbone.emulateJSON = true;

	app.collections = app.collections || {};

	app.collections.Users = Backbone.Collection.extend({
		model: app.models.User,

		sync: function (method, model, options) {
			switch (method) {
				case 'read':
					$.ajax(_.extend({
						type: 'POST',
						url: '/api/v1/users',
						data: {
							action: 'read'
						}
					}, options));
					break;
			}
		}
	});
}(window.app = window.app || {}));
