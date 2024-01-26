const mongoose = require("mongoose");
const { AccountSchema } = require("../models/account.model");
const { accountUuid } = require("../utils/uuid.utils");

const Account = new mongoose.model('Account', AccountSchema);

// const fetchBooks = async () => {
//     return await Book.find({});
// };

// const searchBooks = async (condition) => {
//     return await Book.find(condition);
// };

// const getBook = async (bid) => {
//     return await Book.findOne({bid});
// };

// const updateBook = async (filterOptions, updateOptions) => {
//     const res = await Book.updateOne(filterOptions, updateOptions);
//     return res.modifiedCount;
// };

const createAccount = async (parma) => {
    const newAccount = await Account();
    newAccount.aid = accountUuid();
    // newBook.title = title;
    // newBook.author = author;
    // newBook.price = price;
    // newBook.publishedAt = publishedAt;

    await newAccount.save();
    return newAccount;
};

// const deleteBook = async (bid) => {
//     const  res = await Book.deleteOne({bid});
//     return res.deletedCount;
// };

module.exports = {
    // fetchBooks,
    // searchBooks,
    // getBook,
    createAccount,
    // deleteBook,
    // updateBook
}
