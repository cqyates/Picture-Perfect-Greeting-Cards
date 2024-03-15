const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/picture-perfect-cards');
mongoose.connect("mongodb+srv://coreyadmin:RedHotMama@cluster0.drpsv39.mongodb.net/picture-perfect-cards?retryWrites=true&w=majority&appName=Cluster0")
module.exports = mongoose.connection;
