Meteor.startup( function () {

	// Home page
	Router.route('/', {
		name: 'home',
		template: 'home',
		controller: 'HomeController'
	});

	// Profile Edit page
	Router.route('/profile/edit', {
		name: 'profileEdit',
		template: 'profileEdit',
		controller: 'ProfileEditController'
	});

	// Profile Photos page
	Router.route('/profile/photos', {
		name: 'profilePhotos',
		template: 'profilePhotos',
		controller: 'ProfilePhotosController'
	});

	// Profile Reviews page
	Router.route('/profile/reviews', {
		name: 'profileReviews',
		template: 'profileReviews',
		controller: 'ProfileReviewsController'
	});

	// Profile Verifications page
	Router.route('/profile/verifications', {
		name: 'profileVerifications',
		template: 'profileVerifications',
		controller: 'ProfileVerificationsController'
	});

	// Profile View page
	Router.route('/profile/:_id', {
		name: 'profileView',
		template: 'profileView',
		controller: 'ProfileViewController'
	});	

});