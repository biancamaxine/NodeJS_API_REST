import 'dotenv/config';
import mongoose from 'mongoose';

const DB = {
  user: process.env.MONGO_USER,
  pass: process.env.MONGO_PASS,
}

mongoose.connect(`mongodb+srv://${DB.user}:${DB.pass}@mycluster.fm1sgia.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => console.log('Server is connected in MongoDB'))
  .catch(err => console.log(err));