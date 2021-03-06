import mongoose from 'mongoose'

const accountSchema = mongoose.Schema({
  agencia: {
    type: Number,
    required: true,
  },
  conta: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
    min: 0,
    validate(balance) {
      if (balance < 0) throw new Error('Valor negativo para balance')
    },
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
})

const accountModel = mongoose.model('accounts', accountSchema, 'accounts')

export { accountModel }
