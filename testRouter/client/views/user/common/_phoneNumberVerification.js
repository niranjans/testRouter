Template._phoneNumberVerification.helpers({
	unverifiedPhoneNumber: function() {
		return Session.get('user-unverifiedPhoneNumber');
	}
})

Template._phoneNumberVerification.rendered  = function() {
	$(".phone-number-verification-process, .phone-number-verification-instructions").hide();
	$(".verfication-step-2").hide();
	
};

Template._phoneNumberVerification.events({
	'click .change-phone-number': function(e, t) {
		e.preventDefault();
		$(".phone-number-default").hide();
		$(".phone-number-verification-process, .phone-number-verification-instructions").show();
	},
	'click #cancel-phone-verification': function(e, t) {
		e.preventDefault();

		$(".verfication-step-2").hide();
		$(".verfication-step-1").show();

		$(".phone-number-default").show();
		$(".phone-number-verification-process, .phone-number-verification-instructions").hide();
	},	
	'click #sms-confirm-button': function(e, t) {
		e.preventDefault();

		var newPhone = t.find('#newPhoneText').value;
		var phoneRegEx = /^[0-9]{10}$/	// Simple 10 digits.

		
		if (phoneRegEx.test(newPhone)) {
			Meteor.call('sendSmsVerification', Meteor.userId(), newPhone, function (error, result) {
				console.log(error);
				console.log(result);
			  if (error) {
			    toastr.error("Failed to verify phone number: " + error);
			  } else {
			  		Session.set('user-unverifiedPhoneNumber', '+1' + newPhone);

			  		$(".verfication-step-2").show();
					$(".verfication-step-1").hide();
			    // toastr.success("Email verification sent. Please check your email inbox.");
			  }
			});
		} else 
			toastr.error("Not a valid phone number. Please enter 10 digits.");
		
	},
	'click #call-confirm-button': function(e, t) {
		e.preventDefault();

		var newPhone = t.find('#newPhoneText').value;
		var phoneRegEx = /^[0-9]{10}$/	// Simple 10 digits.

		console.log(newPhone)
		
		if (phoneRegEx.test(newPhone)) {
			Meteor.call('triggerCallPhoneVerification', Meteor.userId(), newPhone, function (error, result) {
			  if (error) {
			    toastr.error("Failed to verify phone number: " + error);
			  } else {
			  		Session.set('user-unverifiedPhoneNumber', '+1' + newPhone);

			  		$(".verfication-step-2").show();
					$(".verfication-step-1").hide();
			    // toastr.success("Email verification sent. Please check your email inbox.");
			  }
			});
		} else 
			toastr.error("Not a valid phone number. Please enter 10 digits.");
	},
	'submit #phoneCodeForm': function(e, t) {
		e.preventDefault();

		var checkCode = t.find('#phoneCodeInput').value;

		// console.log(checkCode);

		Meteor.call('checkPhoneVerificationCode', Meteor.userId(), checkCode, function (error, isVerified) {
		  if (error) {
		    toastr.error("Failed to verify phone number: " + error);

		    // Back to step1
	  		$(".verfication-step-1").show();
			$(".verfication-step-2").hide();
		  } else {
		  		if(isVerified) {
		  			toastr.success("Phone number verified.");
		  			$(".phone-number-verification-process, .phone-number-verification-instructions").hide();
		  		} else {
		  			toastr.error("The code entered did not match.");
		  		}
		  }
		});

	}

})