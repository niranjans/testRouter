isCurrentUser = function(user) {
	if (typeof user == 'object') 
		return Meteor.userId() == user._id;
	else if (typeof user == 'string')
		return Meteor.userId() == user;
	else 
		return false	
};

hasVerifiedEmail = function(userID) {
	if(isCurrentUser(userID)){
		if(Meteor.user().emails)
			return Meteor.user().emails[0].verified;
		else 
			return false;
	} else {

	}
}