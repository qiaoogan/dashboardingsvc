let mongodbUrl;

switch (process.env.DASHBOARDINGSVC_ENV) {
    case "containerized":
        mongodbUrl = `mongodb://${process.env.DASHBOARDINGSVC_DB_HOST}:${process.env.DASHBOARDINGSVC_DB_PORT}/dashboardingsvcdb`;
        break;
    default:
        mongodbUrl = 'mongodb://127.0.0.1:29009/dashboardingsvcdb';
        break;
}

module.exports = {
    mongodbUrl,
};
