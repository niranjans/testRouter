Template._verifyEmail.events({
	'click #verify-email-button': function(e, t) {
		e.preventDefault();
		$('#modalVerifyEmail').modal('toggle');
	},
	'click #resend-email-verification-button': function(e, t) {
		e.preventDefault();

		Meteor.call('resendEmailVerification', Meteor.userId(), function (error, result) {
		  if (error) {
		    toastr.error("Failed to send verification email: " + error);
		  } else {
		    toastr.success("Email verification sent. Please check your email inbox.");
		  }
		  $('#modalVerifyEmail').modal('hide');
		});
	}
})