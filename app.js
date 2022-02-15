const Database = require('./database');

const getUserByUsername = (Db, username) => {
  return Db.users.find((user) => user.username === username);
}

const validateUser = (Db, { username, password }) => {
  const user = getUserByUsername(Db, username)

  if (!user) {
    console.log(`User ${username} Tidak ditemukan.`);
    return false;
  }

  if (user.password !== password) {
    console.log('Password anda salah.');
    return false;
  }

  return true;
};

const searchUserByUsername = (Db, keyword) => {
  return Db.users.filter((user) => user.username.toLowerCase().includes(keyword.toLowerCase()));
};

const app = () => {
  const username = 'John_Doe';
  user = getUserByUsername(Database, username);
  console.log('User ditemukan : ', user);

  console.log('Memvalidasi User ...');
  const password = '***';
  if (!validateUser(Database, { username, password })) {
    return;
  }
  console.log('Validasi Berhasil.');

  const searchUsername = 'Pete';
  const searchResult = searchUserByUsername(Database, searchUsername);
  console.log(`Hasil pencarian user dengan keyword ${searchUsername}: `, searchResult);
};

app();
