let mongodbUrl;

switch (process.env.DASHBOARD_BACKEND_ENV) {
    case "containerized":
        mongodbUrl = `mongodb://${process.env.DASHBOARDINGSVC_DB_HOST}:${process.env.DASHBOARDINGSVC_DB_PORT}/dashboardingsvcdb`;
        console.log("*******", mongodbUrl)
        break;
    default:
        mongodbUrl = 'mongodb://127.0.0.1:29009/dashboardingsvcdb';
        console.log("*******", mongodbUrl)
        break;
}

module.exports = {
    mongodbUrl,
};