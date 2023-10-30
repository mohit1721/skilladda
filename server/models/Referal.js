const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReferralSchema = new Schema({
  referralId: {
    type: String,
    unique: true
  },
  referralLink: {
    type: String,
    unique: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = { Referral: mongoose.model('Referal', ReferralSchema) }
