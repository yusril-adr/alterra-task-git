const Database = require('./database');

const getUserByUsername = (username, Db) => {
  return Db.users.find((user) => user.username === username);
}


const app = () => {
  const username = 'John_Doe';
  user = getUserByUsername(username, Database);
  console.log('User ditemukan : ', user);
};

app();
