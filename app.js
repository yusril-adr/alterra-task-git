const Database = require('./database');

const validateUser = (Db, { username, password }) => {
  const user = Db.users.find((user) => user.username === username);

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
  console.log('Memvalidasi User ...');
  const username = 'John_Doe';
  const password = '***';
  if (!validateUser(Database, { username, password })) {
    return;
  }
  console.log('Validasi Berhasil.')
};

app();
