"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Build Schema
 */
const AccountSchema = new Schema({
    aid: { type: String, default: "", trim: true, maxlength: 50 },
    firstName: { type: String, default: "", trim: true, maxlength: 50 },
    lastName: { type: String, default: "", trim: true, maxlength: 50 },
    email: { type: String, default: "", trim: true, maxlength: 50 },
    org: { type: String, default: "", trim: true, maxlength: 50 },
    phone: { type: String, default: "", trim: true, maxlength: 20 },
    address: { type: String, default: "", trim: true, maxlength: 100 },
    state: { type: String, default: "", trim: true, maxlength: 50 },
    zip: { type: String, default: "", trim: true, maxlength: 10 },
    country: { type: String, default: "", trim: true, maxlength: 50 },
    language: { type: String, default: "", trim: true, maxlength: 50 },
    timezone: { type: String, default: "", trim: true, maxlength: 50 },
    currency: { type: String, default: "", trim: true, maxlength: 10 },
}, { timestamps: true });

/**
 * Validations
 */
// BookSchema.path("bid").required(true, "bid cannot be blank");
// BookSchema.path("title").required(true, "title cannot be blank");
// BookSchema.path("author").required(true, "author cannot be blank");

/**
 * Methods
 */
AccountSchema.methods = {};

module.exports = {
    AccountSchema
};
