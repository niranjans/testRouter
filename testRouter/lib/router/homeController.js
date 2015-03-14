HomeController = RouteController.extend({
	// Add waitOn for subscriptions, data 

	// When the waitOn is removed, data is run once which is the normal behaviour
	waitOn: function() {
		console.log("HomeController waitOn - should run once");
		return Meteor.subscribe('userProfileData');
	},
	data: function() {
		console.log("HomeController data - should run once");
		return {
			testData: "test"
		}
	}
});