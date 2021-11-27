const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const helmet = require("helmet")

require("dotenv").config()

const app = express()

app.use(express.json())

app.use(morgan("common"))
app.use(cors({
    origin: "http://localhost:3000"
}))
app.use(helmet())

const port = process.env.PORT

app.get("/", (req, res) => {
    res.json({
        "message": "All Stuff Now"
    })
})

app.listen(port, () => {
    console.log(`Server has started on http://localhost:${port}`);
})