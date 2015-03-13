Template.profileNav.helpers({
	activeIfTemplateIs: function(template) {
	      var currentRoute = Router.current();
	      return currentRoute && template === currentRoute.lookupTemplate() ? 'profile-nav-active' : '';
	}
});

Template.profileNav.events({
	'click #viewProfileButton' : function (e, t) {
		e.preventDefault();
		Router.go('profileView', {_id: 	Meteor.userId()});
	},
})