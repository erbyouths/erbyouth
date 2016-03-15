var mongoose = require('mongoose');
// 定义博客数据库骨架
var TestSchema = new mongoose.Schema({
  name: String
});


// 定义博客的删除和查找方法
TestSchema.statics = {
  fetch: function(cb) {
    return this.find({})
      .exec(cb);
  }
  
};
// 将博客数据库传递给模块
module.exports = TestSchema;
