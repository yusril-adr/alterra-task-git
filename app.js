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
};

app();
