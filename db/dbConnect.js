const mongoose = require("mongoose")

async function connectDB(params) {
    try {
        await mongoose.connect("mongodb://localhost:27017/carMarket",{
            useNewUrlParser: true,
            useUnifiedTopology: true
          })
        console.log("bazaga ulandi");
        
    } catch (error) {
        throw new Error("bazaga ulanishdagi xatolik");

    }
}
module.exports = connectDB