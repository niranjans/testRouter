// Set up login services
Meteor.startup(function() {
  // Add Facebook configuration entry
  ServiceConfiguration.configurations.update(
    { service: "facebook" },
    { $set: {
        appId: Meteor.settings.fbAppId,
        secret: Meteor.settings.fbSecret
      }
    },
    { upsert: true }
  );

  // Add Google configuration entry
  ServiceConfiguration.configurations.update(
    { service: "google" },
    { $set: {
        clientId: Meteor.settings.googleClientId,
        client_email: Meteor.settings.googleClientEmail,
        secret: Meteor.settings.googleSecret
      }
    },
    { upsert: true }
  );

});
