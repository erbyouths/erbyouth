var mongoose = require('mongoose');
// 定义博客数据库骨架
var BlogSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  title: String,
  content: String,
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

// 定义博客数据库 保存 更新update字段或create时间
BlogSchema.pre('save', function(next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now();
  } else {
    this.meta.updateAt = Date.now();
  }
  next();
});

// 定义博客的删除和查找方法
BlogSchema.statics = {
  // 查询所有博客文章
  fetch: function(cb) {
    return this.find({})
      .sort('meta.updateAt')
      .exec(cb);
  },
  // 根据博客id查询
  findById: function(id, cb) {
    return this.findOne({
      _id: id
    }).exec(cb);
  },
  // 删除博客文章
  removeById: function(id, cb) {
    return this.remove({
      _id: id
    }).exec(cb);
  }
};
// 将博客数据库传递给模块
module.exports = BlogSchema;
