const mongoose = require("mongoose")

async function  connectDB() {
    try {
        await mongoose.connect("mongodb+srv://jaloladdinpirnazarov:WtnMrpN1Cb8UUVs7@cluster0.7vvuv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
            useNewUrlParser: true,
            useUnifiedTopology: true
          })
        console.log("bazaga ulandi");
        
    } catch (error) {
        throw new Error("bazaga ulanishdagi xatolik");

    }
}
module.exports = connectDB