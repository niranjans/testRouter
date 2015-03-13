// Simply 'inherites' helpers from AccountsTemplates
Template.atFormModal.helpers(AccountsTemplates.atFormHelpers);

Template.atFormModal.helpers({
	isSignUpState: function () {
		var parentData = Template.currentData();
        var state = (parentData && parentData.state) || AccountsTemplates.getState();
        return state == "signUp" 
	}
});
	

Template.atFormModal.events({
	// Show the Email form when email is selected
	'click #email-register': function (event, template) {
		event.preventDefault();
		$(event.currentTarget).hide();
		$("#signUpEmailForm").show(300);
	},
	'click #at-modal-signIn': function (e, t) {
		e.preventDefault();
		$('#modalSignUp').modal('toggle');
		$('#modalSignIn').modal('toggle');
	},
	'click #at-modal-signUp': function (e, t) {
		e.preventDefault();
		$('#modalSignIn').modal('toggle');
		$('#modalSignUp').modal('toggle');
	}
});

Template.atFormModal.rendered = function() {
	$("#signUpEmailForm").hide();
};