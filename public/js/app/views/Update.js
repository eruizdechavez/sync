(function (app) {
	app.views = app.views || {};

	app.views.Update = Backbone.View.extend({

		EDIT: 'update_view.edit',

		template: null,
		dispatcher: null,

		events: {
			'click .btn-primary': 'edit'
		},

		initialize: function () {
			_.bindAll(this);

			this.dispatcher = this.options.dispatcher;
			this.template = _.template(this.options.template);
			this.listenTo(this.dispatcher, app.views.User.prototype.EDIT, this.show);
		},

		render: function () {
			this.$('.modal-body').html(this.template(this.model.toJSON()));
			return this;
		},

		show: function (model) {
			this.model = model;
			this.render();
			this.$el.modal();
		},

		edit: function () {
			this.model.set({
				name: this.$('#inputName').val(),
				email: this.$('#inputEmail').val(),
				password: this.$('#inputPassword').val()
			});
			this.model.save();
			this.$el.modal('hide');
		}
	});
}(window.app = window.app || {}));
