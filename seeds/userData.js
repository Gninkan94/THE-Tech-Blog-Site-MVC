// Importing Post model from ../models directory
const { User } = require("../models");
// Array of blog post data
const userData = [];
// This Function to seed posts table with data using bulkCreate method
const seedUsers = () => User.bulkCreate(userData);
// Exporting seedPosts function for use in other files
module.exports = seedUsers;