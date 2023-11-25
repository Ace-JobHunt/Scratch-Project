const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const jobSchema = new Schema({
  company: String,
  title: String,
  salary: String,
  status: String,
  link: String,
});

const Job = mongoose.model('job', jobSchema);

module.exports = { Job };
