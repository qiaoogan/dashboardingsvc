const express = require("express");
const router = express.Router();
const { StatusCodes } = require('http-status-codes');
const { generalResponse, catchAsync} = require("../utils/common.utils");
const { check, query, validationResult } = require("express-validator");
const stockService = require("../services/stock.service");

router.get("/books/health", [
        // check("account.firstName", "firstName must be provided").matches(/^[ a-zA-Z]+$/),
        // check("author", "author must be provided").matches(/^[ a-zA-Z]+$/),
    ],
    catchAsync(async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(StatusCodes.BAD_REQUEST).json(generalResponse(errors.array()).failed);
        }
        
        const response = await stockService.getHealth();

        return res.status(StatusCodes.OK).send({ stockServiceHealth: JSON.stringify(response) });
    })
);




module.exports = router;
