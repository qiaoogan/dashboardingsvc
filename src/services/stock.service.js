const stockClient = require("../clients/stocksvc.client");

const getHealth = async() => {
    const response = await stockClient.getHealth();
    return response;
};

module.exports = {
    getHealth
}