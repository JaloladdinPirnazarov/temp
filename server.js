const express = require("express")
const cors = require("cors")
const PORT = process.env.PORT || 3001
const app = express()
const connectDB = require("./db/dbConnect")
const carCategoryRouter = require("./router/carCategoryRouter")
const carRouter = require("./router/carRouter")
const authRouter = require("./router/authRouter")
const swaggerUi = require('swagger-ui-express')
const swaggerDocs = require("./utils/swagger")

app.use(express.json())
app.use(cors())

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(carCategoryRouter)
app.use(carRouter)
app.use(authRouter)

const start = async () => {
    try {
        await connectDB()
        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}`);
        })
    } catch (error) {
        console.log(`Error starting server: ${error.message}`);
    }
}

start()
