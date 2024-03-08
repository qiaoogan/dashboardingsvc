const httpUtls = require("../utils/http.utils");
const envConfig = require("../configs/env.config");

const buildUrl = (bathPath, resourcePath, bookName="") => {
  return `${envConfig.HOST}${bathPath}${resourcePath}${bookName}`;
};

const buildAccountUrl = (bathPath, resourcePath, bookName="") => {
    return `${envConfig.HOST_ACCOUNT}${bathPath}${resourcePath}${bookName}`;
  };

const getHealth = async () => {
    const url = buildUrl("", envConfig.HEALTH_PATH);
    const response = await httpUtls.get(url);
    return response;
};

const getBooks = async () => {
    const url = buildUrl(envConfig.BATH_PATH, envConfig.BOOK_PATH)
    const response = await httpUtls.get(url);
    return response;
};

const createBook = async (data) => {
    const url = buildUrl(envConfig.BATH_PATH, envConfig.BOOK_PATH)
    const response = await httpUtls.post(url,data);
    return response;
};

const updateBook = async (data) => {
    const url = buildUrl(envConfig.BATH_PATH, envConfig.BOOK_PATH)
    const response = await httpUtls.put(url,data);
    return response;
};

const getBook = async (book_name) => {
    const url = buildUrl(envConfig.BATH_PATH, envConfig.BOOK_PATH, book_name)
    const response = await httpUtls.get(url);
    return response;
};

const deleteBook = async (book_name) => {
    const url = buildUrl(envConfig.BATH_PATH, envConfig.BOOK_PATH, book_name)
    const response = await httpUtls.del(url);
    return response;
};

const createAccount = async (data) => {
    const url = buildAccountUrl(envConfig.ACCOUT_PATH, "", "")
    const response = await httpUtls.post(url,data);
    return response;
};

const getDefaultAccountAid = async () => {
    const url = buildAccountUrl(envConfig.ACCOUNT_BATH, envConfig.ACCOUT_PATH, envConfig.DEFAULT_ACCOUNT_PATH)
    console.log(url)
    const response = await httpUtls.get(url);
    return response;
}

const getDefaultAccount = async (aid) => {
    const url = buildAccountUrl(envConfig.ACCOUNT_BATH, envConfig.ACCOUT_PATH, aid)
    console.log(url)
    const response = await httpUtls.get(url);
    return response;
}

module.exports = {
    getHealth, getBooks, createBook, updateBook, getBook, deleteBook,createAccount,getDefaultAccountAid,getDefaultAccount
}