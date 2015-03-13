// onSubmitHook function to run after submit/login and close modals
var submitFunc = function(error, state){
  if (!error) {
    if (state === "signIn") {
      $('#modalSignIn').modal('hide');
    }
    if (state === "signUp") {
      $('#modalSignUp').modal('hide');
    }
  }
};

var logoutFunc = function(error, state){
    alert("funtcion!");
  if (!error) {
    Router.go('home');
  }
};

// Remove the default fields first for the right order
AccountsTemplates.removeField('email');
AccountsTemplates.removeField('password');

AccountsTemplates.addField({
    _id: 'firstName',
    type: 'text',
    displayName: "First Name",
    required: true,
    errStr: 'First Name invalid',
    placeholder: 'First Name'
});

AccountsTemplates.addField({
    _id: 'lastName',
    type: 'text',
    displayName: "Last Name",
    required: true,
    errStr: 'Last Name invalid',
    placeholder: 'Last Name'
});

AccountsTemplates.addField({
    _id: 'email',
    type: 'email',
    required: true,
    re: /.+@(.+){2,}\.(.+){2,}/,
    errStr: 'error.accounts.Invalid email',
    trim: true,
    lowercase: true
});

AccountsTemplates.addField({
    _id: 'password',
    type: 'password',
    required: true,
    minLength: 8,
    errStr: 'error.minChar'
});

// Routes
AccountsTemplates.configureRoute('signIn', {
    name: 'login',
    path: '/login',
    template: 'login',
    redirect: '/'
});

AccountsTemplates.configureRoute('signUp', {
    name: 'signUp',
    path: '/signUp',
    template: 'signUp',
    redirect: '/',
});

AccountsTemplates.configureRoute('verifyEmail', {
    name: 'verifyEmail',
    path: '/verifyEmail',
    template: 'verifyEmail',
    redirect: '/',
});



AccountsTemplates.configure({
    // Behaviour
    confirmPassword: false,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: false,
    showLabels: true,
    showPlaceholders: true,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    // privacyUrl: 'privacy',
    // termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/',
    redirectTimeout: 4000,

    // Hooks
    onSubmitHook: submitFunc,
    onLogoutHook: logoutFunc,
    
    // Texts
    /*
    texts: {
      button: {
          signUp: "Register Now!"
      },
      socialSignUp: "Register",
      socialIcons: {
          "google": "fa fa-google-plus",
          "facebook" : "fa fa-facebook"
      },
      title: {
          forgotPwd: "Recover Your Passwod"
      },
    },
    */
});
