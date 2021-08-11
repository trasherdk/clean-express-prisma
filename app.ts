import helmet from "helmet"
import express from "express"
import createRouter from "express-file-routing"

import config from "./config"

import { getUptime } from "./utils/helpers"

const app = express()

app.use(express.json())

app.use(helmet())

// creates file-based routing for /routes
createRouter(app)

app.listen(config.PORT, () => console.log(`🚀 Startup ${getUptime()}`))

process.on("exit", () => console.log(`✨ Done in ${getUptime()}`))