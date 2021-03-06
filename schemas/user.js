var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  password: String,
  name: String,
  summary: String,
  borthday: Date,
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
});

UserSchema.pre('save', function(next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now();
  } else {
    this.meta.updateAt = Date.now();
  }
  next();
});

UserSchema.statics = {
  fetch: function(cb) {
    return this.find({})
      .sort('meta.updateAt')
      .exec(cb);
  },
  findById: function(id, cb) {
    return this.findOne({
      _id: id
    }).exec(cb);
  },
  removeById: function(id, cb) {
    return this.remove({
      _id: id
    }).exec(cb);
  }
};

module.exports = UserSchema;
