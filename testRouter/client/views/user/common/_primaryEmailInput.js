Template._primaryEmailInput.helpers({

});

Template._primaryEmailInput.events({
	'click .change-email': function(event, template) {
		event.preventDefault();
		$('#modalNewEmail').modal('toggle');
	},

	'submit form': function(event, template) {
		event.preventDefault();
		var email = template.find('#newEmail').value;

		if(SimpleSchema.RegEx.Email.test(email)) {
			Meteor.call('newPrimaryEmail', Meteor.userId(), email, function (error, result) {
			  if (error)
			    toastr.error("Failed to change email: " + error);
			  else
			    toastr.success("Email changed. Please verify your email.");
			  $('#modalNewEmail').modal('hide');
			});
		} else 
			toastr.error("Not a valid email address.");
		
	}
});