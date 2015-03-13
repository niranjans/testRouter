Meteor.publish('currentUserServiceData', function() {
  return Meteor.users.find(
  	{_id: this.userId},
  	{
  		fields: {
  			"services.facebook.id" : true,
  			"services.google.picture": true
  		}
  	}
  	);
});

Meteor.publish('userProfileData', function(displayUserId) {
	
	// if the user we want to display the profile is the currently logged in user
    if(this.userId == displayUserId){
        // then we return the corresponding full document via a cursor
        return Meteor.users.find(this.userId);
    }
    else{
    	return Meteor.users.find(
			  	{_id: displayUserId},
			  	{
			  		fields: {
			  			"services.facebook.id" : true,
			  			"services.google.picture": true,
			  			"profile.firstName": true,
			  			"profile.lastName": true,
			  			"profile.musicStyle": true
			  		}
			  	}
		  	);
    }

});

Meteor.publish('userProfileVerification', function() {
  return Meteor.users.find(
    {_id: this.userId},
    {
      fields: {
        "emails" : true,
        "customVerifications": true,
        "services": true
      }
    }
    );
});