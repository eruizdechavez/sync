(function (app) {
	app.views = app.views || {};

	app.views.Table = Backbone.View.extend({
		template_user: null,
		dispatcher: null,

		initialize: function () {
			_.bindAll(this);

			this.dispatcher = this.options.dispatcher;
			this.template_user = this.options.template_user;

			this.listenTo(this.model, 'reset', this.render);
			this.listenTo(this.model, 'add', this.add);
		},

		render: function () {
			this.$el.empty();
			this.model.each(this.add);
			return this;
		},


		add: function (user) {
			if (!user.view) {
				user.view = new app.views.User({
					model: user,
					template: this.template_user,
					dispatcher: this.dispatcher
				});
			}
			this.$el.append(user.view.render().el);
		}
	});
}(window.app = window.app || {}));
