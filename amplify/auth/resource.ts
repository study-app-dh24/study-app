import { defineAuth } from '@aws-amplify/backend';

export const auth = defineAuth({
  loginWith: {
    email: true,
    // Add phone if you want to allow phone number login
    // phone: true
  },
  userAttributes: {
    website: {
      mutable: true,
      required: true,
    },
    fullname: {
      mutable: true,
      required: true,
    },
    // Add your custom attributes here
    'custom:privacy': {
      mutable: true,
      dataType: 'String'
    },
  }
});