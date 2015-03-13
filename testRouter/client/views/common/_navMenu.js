Template._navMenu.events({
	// Show the Email form when email is selected
	'click #logout-button': function (event, template) {
		event.preventDefault();
		Meteor.logout();
		Router.go('home');
	}
});