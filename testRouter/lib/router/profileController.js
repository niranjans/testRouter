ProfileController = RouteController.extend({
	layoutTemplate: 'UserProfileLayout',
	yieldRegions: {
    	'navBarMain': {to: 'navBarMain'},
    	'userNav': {to: 'topUserNav'},
    	'profileNav': {to: 'sideProfileNav'}
	},
	// Authentication
	onBeforeAction: function() {
	    if(!Meteor.user()){
	      // Router.go(Router.path('login'));
	      this.redirect('login'); 
		  this.render('login');
	    } else {
	    	this.next();
	    } 
	  }

	// Add waitOn for subscriptions, data 
});

// Sub controllers

ProfileEditController = ProfileController.extend({
	data: function () { 
		console.log("edit controller data");
		return Meteor.user(); 
	}
});

ProfilePhotosController = ProfileController.extend({

});

ProfileReviewsController = ProfileController.extend({
	
});

ProfileVerificationsController = ProfileController.extend({
	waitOn: function() {
		console.log("ProfileVerificationsController waitOn");
		return Meteor.subscribe('userProfileVerification');
	},

	data: function() {
		if(this.ready()) {
			// If current user has verified email
			console.log("ProfileVerificationsController - data - start");
			var verifiedEmail = Meteor.user().emails && Meteor.user().emails[0].verified ? Meteor.user().emails[0].address : '';

			var data = {
				verifiedEmail: verifiedEmail
			};
			console.log("ProfileVerificationsController - data - end");
			return data;
		}
	}
});

// Profile View Controller is not similar to the rest. The layout is closer to the default App layout. 
ProfileViewController = RouteController.extend({

	waitOn: function() {
	    return Meteor.subscribe('userProfileData', this.params._id);
	  },

	data: function() {
		var data = {
			displayUser: Meteor.users.findOne({ _id: this.params._id }) 
		};
		return data;
	},

  action: function () {
    // render all templates and regions for this route
    this.render();
  }
});