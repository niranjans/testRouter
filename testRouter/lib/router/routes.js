Meteor.startup( function () {

	// Home page
	Router.route('/', {
		name: 'home',
		template: 'home',
		controller: 'HomeController'
	});

});