const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`;

// 生成指定范围内的随机数（包括小数）
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

const book = {
  "name": `pytest_${Date.now()}`,
  "author": "pytest",
  "publishedAt": formattedDate, // 当前日期
  "price": getRandomNumber(50, 200), // 50到200之间的随机小数（保留两位小数）
  "stock": Math.floor(getRandomNumber(0, 500)) // 0到500之间的随机整数
};

const defaultAccount = {
  // firstName: 'Doggering',
  // // lastName: 'Piggyyy',
  // email: 'dogger@piggy.com',
  // org: 'MyHome',
  // phone: '+86 13550300443',
  // address: '123 Some Place on the Earth',
  // state: 'Si Chuan',
  // zip: '9090950',
  // country: 'China',
  // language: 'Chinese',
  // timezone: '(GMT-08:00) Tijuana',
  currency: 'CNY',
}

const defaultAccountAid = {
  "aid": "AID7B8E1C0B8E93453DBCE4DB40F4929B11"
}

module.exports = {book, defaultAccount,defaultAccountAid};
