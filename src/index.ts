import express from "express"
import { config } from "dotenv"
import cors from "cors"

const start = async () => {
    config()

    const app = express()
    const port = process.env.PORT || 8000

    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(cors({ origin: "*" }))

    console.log("Establishing database connection...")
    console.log("Starting application server...")

    
    app.listen(port, () => {
        console.log(`Server's running in http://localhost:${port}`)
    });

}

start()







