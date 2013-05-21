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
			switch (method) {
				case 'create':
					$.ajax(_.extend({
						type: 'POST',
						url: '/api/v0/create_user',
						data: this.toJSON()
					}, options));
					break;

				case 'update':
					$.ajax(_.extend({
						type: 'POST',
						url: '/api/v0/update_user',
						data: this.toJSON()
					}, options));
					break;

				case 'delete':
					$.ajax(_.extend({
						type: 'POST',
						url: '/api/v0/delete_user',
						data: this.toJSON()
					}, options));
					break;
			}
		}
	});
}(window.app = window.app || {}));