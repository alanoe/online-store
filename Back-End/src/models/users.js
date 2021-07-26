const mongoose = require('mongoose');

userOptions = {discriminatoryKey: 'kind'}
const BaseUserSchema = new mongoose.Schema(
  {
    email: {type:String, unique: true, required: true},
    password: {type:String, unique: true},
    name: {type:String, required: true},
    phone: {type: String, required: true},
  },
  userOptions
)
const BaseUser = mongoose.model('BaseUser', BaseUserSchema)

const AdminUserSchema = new mongoose.Schema({}, userOptions)
const AdminUser = BaseUser.discriminator('AdminUser', AdminUserSchema);

const CreditCardSchema = new mongoose.Schema({
    number: {type: String, required: true},
    name: {type:String, required: true},
    verificationCode: {type: String, required: true}
})

const UserSchema = new mongoose.Schema(
  {
    address: {type: String, default: 0},
    creditCards: [CreditCardSchema]
  },
  userOptions
)
const User = BaseUser.discriminator('User', UserSchema);

module.exports = {AdminUser, BaseUser, User};
