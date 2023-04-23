import 'dotenv/config';

import mongoose from 'mongoose';

import app from './app/app';

const DB = {
  user: process.env.MONGO_USER,
  pass: process.env.MONGO_PASS,
}

mongoose.connect(`mongodb+srv://${DB.user}:${DB.pass}@mycluster.fm1sgia.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`App is running at port ${PORT}`));
  })
  .catch(err => console.log(err));
