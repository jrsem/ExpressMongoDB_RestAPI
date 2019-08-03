//to access a mongodb database in javascript we use "mongoose"
import mongoose, { Schema } from 'mongoose';

// Define movie schema
//o contructor "Schema" é utilizado aqui para criar um Schema
var movieSchema = new Schema({
  title: {
    type: String,
    unique: true,
  },
  poster: String,
  genre: String,
  days: Array,
  times: Array,
});

// we Export this Mongoose model(movieSchema), that make outher file can call it and use using
// "import" command
export default mongoose.model('movie', movieSchema);