Router.configure({
	layoutTemplate: 'ApplicationLayout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	yieldRegions: {
    	'navBarMain': {to: 'navBarMain'}
  	}

});
