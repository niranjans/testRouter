Template._moreVerifications.events({
	'click #verify-facebook-button': function(e, t) {
		Meteor.linkWithFacebook({
            requestPermissions: ['user_friends']
        }, function(err) {
        	if(err)
            	toastr.error("Failed to verify Facebook: " + err);
            else
            	toastr.success("Facebook account verified");
        });
	}
});