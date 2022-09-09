const mongoose = require('mongoose')
const { Schema, model } = mongoose

const tweetSchema = new Schema({
  tweetText: { type: String, required: true },
  tweetImg: String,
  reply: String,
  author: String,
  hashtag: { type: String, required: true },
  created_at: Date
})

const Tweet = model('Tweet', tweetSchema)

module.exports = Tweet