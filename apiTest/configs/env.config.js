let host;
switch (process.env.TEST_ENV) {
    case "container":
        host = `http://${process.env.STOCKSERVICE_HOST}:${process.env.STOCKSERVICE_PORT}`;
        host_account = `http:${process.env.STOCKSERVICE_HOST}:${process.env.BACKENDSEVER_PORT}`;
        break;
    default:
        host = 'http://localhost:8901';
        host_account = 'http://localhost:3102';
        break;
}

module.exports = {

    HOST_ACCOUNT: host_account,
    HOST: host,
    HEALTH_PATH: "/health",
    BATH_PATH: "/stock",
    BOOK_PATH: "/book",
    ACCOUNT_BATH: "/settings",
    ACCOUT_PATH: "/account",
    DEFAULT_ACCOUNT_PATH: "/default"
    
}

