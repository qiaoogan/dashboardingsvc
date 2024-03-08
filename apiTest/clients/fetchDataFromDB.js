const mongoose = require("mongoose");

const getBookByName = async (book_name) => {
    const result = await books.find({name: book_name});
    return result
};


