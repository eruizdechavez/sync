(function (app) {
	app.views = app.views || {};

	app.views.Create = Backbone.View.extend({

		ADD: 'create_view.add',

		template: null,
		dispatcher: null,

		events: {
			'click .btn-primary': 'add'
		},

		initialize: function () {
			_.bindAll(this);

			this.dispatcher = this.options.dispatcher;
			this.template = _.template(this.options.template);
			this.listenTo(this.dispatcher, app.views.CreateButton.prototype.CLICK, this.show);
		},

		render: function () {
			this.$('.modal-body').html(this.template({
				name: '',
				email: '',
				password: ''
			}));

			return this;
		},

		show: function () {
			this.render();
			this.$el.modal();
		},

		add: function () {

			this.dispatcher.trigger(this.ADD, {
				name: this.$('#inputName').val(),
				email: this.$('#inputEmail').val(),
				password: this.$('#inputPassword').val()
			});
			this.$el.modal('hide');
		}
	});
}(window.app = window.app || {}));
