let host;
switch (process.env.DASHBOARD_BACKEND_ENV) {
    case "containerized":
        host = `http://${process.env.STOCKSERVICE_HOST}:${process.env.STOCKSERVICE_PORT}`;
        break;
    default:
        host = 'http://localhost:8901';
        break;
}

module.exports = {

    // HOST: "http://localhost:8901",
    HOST: host,
    HEALTH_PATH: "/health",
    BATH_PATH: "/stock",
    BOOK_PATH: "/book",
    
}

