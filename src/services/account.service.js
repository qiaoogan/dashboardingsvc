const mongoose = require("mongoose");
const { AccountSchema } = require("../models/account.model");
const { accountUuid } = require("../utils/uuid.utils");
const { param } = require("express-validator");

const Account = new mongoose.model('Account', AccountSchema);

const searchAccount = async (condition) => {
    const account = await Account.findOne(condition);

    return { 
        aid: account.aid,
        firstName: account.firstName,
        lastName: account.lastName,
        email: account.email,
        org: account.org,
        phone: account.phone,
        address: account.address,
        state: account.state,
        zip: account.zip,
        country: account.country,
        language: account.language,
        timezone: account.timezone,
        currency: account.currency,
    }
};

const getAccount = async () => {
    const acount = await Account.findOne();

    return { aid: acount.aid }
};

const updateAccount = async (filterOptions, updateOptions) => {
    const response = await Account.updateOne(filterOptions, updateOptions);
    return response.modifiedCount;
};

const createAccount = async (param) => {
    const newAccount = await Account();

    newAccount.aid = accountUuid();
    newAccount.firstName = param.firstName;
    newAccount.lastName = param.lastName;
    newAccount.email = param.email;
    newAccount.org = param.org;
    newAccount.phone = param.phone;
    newAccount.address = param.address;
    newAccount.state = param.state;
    newAccount.zip = param.zip;
    newAccount.country = param.country;
    newAccount.language = param.language;
    newAccount.timezone = param.timezone;
    newAccount.currency = param.currency;

    await newAccount.save();
    return newAccount;
};

const checkAndCreateDefaultAccount = async (param) => {
    
    const condition = { firstName: param.firstName, lastName: param.lastName };
    const account = await searchAccount(condition);

    if (account) {
        console.info(`Default account fistName=${account.firstName}, lastName=${account.lastName} already exist`);
        return 
    }

    await createAccount(param);
    console.info(`Default account doesn't exist, created new one.`);
}

module.exports = {
    getAccount,
    searchAccount,
    updateAccount,
    createAccount,
    checkAndCreateDefaultAccount,
}
