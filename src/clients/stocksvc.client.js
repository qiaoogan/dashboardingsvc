const httpUtls = require("../utils/http.utils");
const stockConfig = require("../configs/stocksvc.config");

const heathUrl = () => {
    return `${stockConfig.HOST}${stockConfig.HEALTH_PATH}`;
}

const buildUrl = resourcePath => {
  return `${stockConfig.HOST}${stockConfig.BATH_PATH}${resourcePath}`;
};

const getHealth = async () => {
    const url = heathUrl();
    const response = await httpUtls.get(url);
    console.log(response);
    return response;
};

// export const searchBooks = async (author) => {
//   const url = buildUrl(`?author=${author}`)
//   return await get(url);
// };

// export const createBook = async (bookData) => {
//   const url = buildUrl(BOOK_PATH);
//   const payload = { ...bookData };
//   return await post(url, payload);
// };

// export const getBook = async (bid) => {
//   const url = buildUrl(BOOK_PATH) + `?bid=${bid}`;
//   return await get(url);
// };

// export const deleteBook = async (bid) => {
//   const url = buildUrl(PATH_PROJECT) + `/${pid}`;
//   return await del(url);
// };

// export const updateBook = async (bid, bookData) => {
//   const url = buildUrl(PATH_PROJECT) + `/${pid}`;
//   let payload = {};

//   if (bookData.author) {
//     payload['author'] = bookData.author;
//   }

//   if (bookData.publishedAt) {
//     payload['publishedAt'] = bookData.publishedAt;
//   }

//   if (bookData.title) {
//     payload['title'] = bookData.title;
//   }

//   if (bookData.price) {
//     payload['price'] = bookData.price;
//   }

//   return await post(url, payload);
// };

module.exports = {
    getHealth
}