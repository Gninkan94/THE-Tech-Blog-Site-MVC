// Import the all  models
const User = require("./User");
const Post = require("./Post");
const Comment = require("./comment");

// lets define the relationships between  models

User.hasMany(Post, {
  
    foreignKey: "user_id", 
});

Post.belongsTo(User, {
  
    foreignKey: "user_id", 
});

Comment.belongsTo(User, {
  
    foreignKey: "user_id", 
});

Comment.belongsTo(Post, {
 
    foreignKey: "post_id", 
});

Post.hasMany(Comment, {
  foreignKey: "post_id", 
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

// Export the models

module.exports = { User, Post, Comment };