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

// get route return account
router.get("/account", [],catchAsync(async (req, res, next) => {
    
    const response = await accountService.getAccount();
    if (!response) {
        throw new Error("User not found");
    }
    return res.status(StatusCodes.OK).json(response);
})
);

// update route update account
router.put("/account", [],catchAsync(async (req, res, next) => {
    const { aid, _id, __v, ...updateData } = req.body; 

    const response = await accountService.updateAccount({"aid":aid}, {$set: updateData});

    if (response.nModified === 1) {
        return res.status(StatusCodes.OK).json({ message: 'Account updated successfully' });
    } else {
        return res.status(StatusCodes.NOT_FOUND).json({ message: 'Account not found' });
    }
})
);

module.exports = router;
