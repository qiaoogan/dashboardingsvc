const express = require("express");
const router = express.Router();
const { StatusCodes } = require('http-status-codes');
const { generalResponse, catchAsync} = require("../utils/common.utils");
const { check, query, validationResult } = require("express-validator");
const accountService = require("../services/account.service");

router.post("/account", [
        check("account.firstName", "firstName must be provided").matches(/^[ a-zA-Z]+$/),
        // check("author", "author must be provided").matches(/^[ a-zA-Z]+$/),
    ],
    catchAsync(async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(StatusCodes.BAD_REQUEST).json(generalResponse(errors.array()).failed);
        }
        
        const param = {};
        param.firstName = req.body.account.firstName;
        const createdAccount = await accountService.createAccount(param);

        return res.status(StatusCodes.CREATED).send({ aid: createdAccount.aid });
    })
);


module.exports = router;
