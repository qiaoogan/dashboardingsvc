const uuid = require("uuid");

const accountUuid = () => {
    return "AID" + uuid.v4().replace(/-/g, "").toUpperCase();
};

module.exports = {
    accountUuid
}