const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const cardSchema = new Schema({
  recipient_name: {
    type: String,
    required: true,
    trim: true,
  },
  sender_name: {
    type: String,
    required: true,
    trim: true,
  },
  recipient_email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
  sender_email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  pexel_id: {
    type: String,
    required: true
  },
  imageSRC: {
    type: String,
    required: true,
    match: [/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/, 'Must use a valid URL']
  }
});

module.exports = cardSchema;
