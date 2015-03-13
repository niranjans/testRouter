Schema = {};

AddressSchema = new SimpleSchema({
  street1: {
    type: String,
    max: 100
  },
  street2: {
    type: String,
    max: 100,
    optional: true
  },
  city: {
    type: String,
    max: 50
  },
  state: {
    type: String,
    regEx: /^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]$/
  },
  zip: {
    type: String,
    regEx: /^[0-9]{5}$/
  }
});


Schema.UserProfile = new SimpleSchema({
    firstName: {
        type: String,
        regEx: /^[a-zA-Z-]{2,30}$/,
        optional: true		
    },
    lastName: {
        type: String,
        regEx: /^[a-zA-Z]{2,30}$/,
        optional: true
    },
    gender: {
        type: String,
        allowedValues: ['Male', 'Female', 'Other'],
        optional: true
    },
    birthdate: {
        type: Date,
        optional: true,
        autoform: {
          type: "bootstrap-datepicker"
        }
    },
    primaryEmail: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        optional: true
    },
    phoneNumber: {
    	type: String,
    	min: 10,
    	optional: true
    },
    address: {
    	type: AddressSchema,
    	optional: true
    },
    aboutMeDescription: {
    	type: String,
    	max: 5000,
    	optional: true,
        autoform: {
            rows: 8
          }
    },
    languages: {
    	type: String,
    	max: 500,
    	optional: true
    }
});

Schema.PhoneNumberVerification = new SimpleSchema({
    number: {
        type: String,
        regEx: /^[+][1]([0-9]){10}$/,   // For US only (+1)
    },
    verified: {
        type: Boolean
    },
    verificationCode: {
        type: Number,
        optional: true
    },
    verificationCodeSentAt: {
        type: Date,
        optional: true
    }
});

// This is used for custom verifications like Twilio phone, etc
Schema.CustomVerifications = new SimpleSchema({
    phoneNumber: {
        type: Schema.PhoneNumberVerification,
        optional: true
    }
});

Schema.User = new SimpleSchema({
    emails: {
        type: [Object],
        // this must be optional if you also use other login services like facebook,
        // but if you use only accounts-password, then it can be required
        optional: true
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    createdAt: {
        type: Date
    },
    profile: {
        type: Schema.UserProfile,
        optional: true
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    customVerifications: {
        type: Schema.CustomVerifications,
        optional: true
    }
});

Meteor.users.attachSchema(Schema.User);


// Methods -------------------------

