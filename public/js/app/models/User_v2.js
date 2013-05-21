(function (app) {
	app.models = app.models || {};

	app.models.User = Backbone.Model.extend({
		defaults: {
			id: null,
			name: '',
			email: '',
			password: ''
		}
	});
}(window.app = window.app || {}));