const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://fahim37:fahim0037@blogcluster.udrdown.mongodb.net/blogapp?retryWrites=true&w=majority&appName=BlogCluster');
        console.log(
            `Connected to Mongodb Database ${mongoose.connection.host}`.bgMagenta
                .white
        );
    } catch (error) {
        console.log(`MONGO Connect Error ${error}`.bgRed.white);
    }
};

module.exports = connectDB;
