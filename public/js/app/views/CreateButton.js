(function (app) {
	app.views = app.views || {};

	app.views.CreateButton = Backbone.View.extend({

		CLICK: 'button_create_view.click',

		modal: null,

		initialize: function () {
			_.bindAll(this);
			this.dispatcher = this.options.dispatcher;
		},

		events: {
			'click': 'click'
		},

		click: function () {

			this.dispatcher.trigger(this.CLICK);
		}
	});
}(window.app = window.app || {}));
