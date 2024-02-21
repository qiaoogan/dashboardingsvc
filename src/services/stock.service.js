const stockClient = require("../clients/stocksvc.client");

const getHealth = async() => {
    const response = await stockClient.getHealth();
    return response;
};

const getBooks = async() => {
    const response = await stockClient.getBooks();
    return response;
};

module.exports = {
    getHealth, getBooks
}