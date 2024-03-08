// require('log-timestamp');
const express = require("express");
const cors = require("cors");
// const logger = require("morgan");
const cookieParser = require("cookie-parser");

const appRouter = require("./routes/app.route");
const settingsRouter = require("./routes/settings.route");
const tablesRounter = require("./routes/tables.route");

const logger = require("./utils/logger.utils");
const morganMiddleware = require("./middlewares/morgan.middleware");

const databaseUtils = require("./utils/database.utils");
const accountService = require("./services/account.service");
const dataUtils = require("./utils/fixedData.utils");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ origin: '*' }));

app.use(morganMiddleware);
app.use("/", appRouter);
app.use("/settings", settingsRouter);
app.use("/tables", tablesRounter);

databaseUtils.connect();

const port = 3102;
app.listen(port, () => {
    (async () => { 
        await accountService.checkAndCreateDefaultAccount(dataUtils.defaultAccount); 
    })();
    logger.info(`Dashboarding service is running at ${port}`);
})

module.exports = app;
