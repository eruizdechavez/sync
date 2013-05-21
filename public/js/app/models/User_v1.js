(function (app) {
	Backbone.emulateJSON = true;

	app.models = app.models || {};

	app.models.User = Backbone.Model.extend({
		defaults: {
			id: null,
			name: '',
			email: '',
			password: ''
		},

		sync: function (method, model, options) {
			var data = _.extend({
				action: method
			}, this.toJSON());

			$.ajax(_.extend({
				type: 'POST',
				url: '/api/v1/users',
				data: data
			}, options));
		}
	});
}(window.app = window.app || {}));