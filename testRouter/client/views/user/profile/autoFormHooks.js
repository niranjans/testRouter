AutoForm.hooks({
  updateUserForm: {
  	 onSuccess: function(operation, result, template) {
  	 	$("html, body").animate({ scrollTop: 0 }, "slow");
  	 	toastr.success("Profile updated");
  	 },
  }
});