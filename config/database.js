const mongoose = require('mongoose');

require('dotenv').config()

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log('Database is connected successfully on mongoDb')
    })
    .catch((err) => {
      console.log(err.message)
      process.exit(1)
    })
}

module.exports = dbConnect;