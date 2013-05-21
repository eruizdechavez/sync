/*global app:false*/
window.app = window.app || {};

$(function () {
	var users, table, create, update, btn_create;

	_.templateSettings = {
		interpolate: /\{\{(.+?)\}\}/g
	};

	app.dispatcher = _.clone(Backbone.Events);

	users = new app.collections.Users();
	users.fetch();

	users.listenTo(app.dispatcher, app.views.Create.prototype.ADD, function (user) {
		this.create(user);
	});

	table = new app.views.Table({
		el: '#table',
		model: users,
		dispatcher: app.dispatcher,
		template_user: $('#templates #user').html(),
	});

	create = new app.views.Create({
		el: '#form-modal-add',
		dispatcher: app.dispatcher,
		template: $('#form').html()
	});

	update = new app.views.Update({
		el: '#form-modal-edit',
		dispatcher: app.dispatcher,
		template: $('#form').html()
	});

	btn_create = new app.views.CreateButton({
		el: '#btn-create',
		dispatcher: app.dispatcher
	});
});