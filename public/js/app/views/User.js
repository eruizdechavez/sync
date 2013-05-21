(function (app) {
	app.views = app.views || {};

	app.views.User = Backbone.View.extend({
		tagName: 'tr',
		template: null,

		EDIT: 'user_button_edit.click',
		DELETE: 'user_button_delete.click',

		events: {
			'click .btn.edit': 'update',
			'click .btn.delete': 'del'
		},

		initialize: function () {
			_.bindAll(this);
			this.template = _.template(this.options.template);
			this.dispatcher = this.options.dispatcher;
			this.listenTo(this.model, 'change', this.render);
		},

		render: function () {
			this.$el.html(this.template(this.model.toJSON()));

			this.delegateEvents();
			return this;
		},

		update: function () {
			this.dispatcher.trigger(this.EDIT, this.model);
		},

		del: function () {
			this.remove();
			this.model.destroy();
		}
	});
}(window.app = window.app || {}));
