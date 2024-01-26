const mongoose = require("mongoose");
const envConfig = require("../configs/env.config");

const connect = () => {
    mongoose.connection.on("error", console.log).on("disconnected", connect);
    return mongoose.connect(envConfig.mongodbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = {
    connect,
};
