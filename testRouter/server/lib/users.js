Accounts.onCreateUser(function(options, user){
	user.profile = options.profile || {};

	// If email was entered, add it to the primary email field
	if (options.email)
		user.profile.primaryEmail = options.email;

	// we wait for Meteor to create the user before sending an email
    /*
	Meteor.setTimeout(function() {
		Accounts.sendVerificationEmail(user._id);
	}, 2 * 1000);
    */
    
	return user;
});
