require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
// If HTTPS is used this port should be set to 443
const PORT = process.env.PORT || 6969
const path = require("path")

// These are required for HTTPS (TLS)
const http = require("http")
const https = require("https")
const fs = require("fs")

// Log to terminal (can be removed/replaced)
console.log("Starting mkrTube Server")
console.log("Connecting to VersaDB")


// This code checks that we are in fact connected to a database
const testDb = async () => {
    const response = await fetch("https://db.versa-db.com/", {
        method: "POST",
        body: JSON.stringify({"versadb": `-auth-only ${process.env.VERSA_USER} ${process.env.VERSA_PW}`})
    })

    const vdb = await response.json()
    console.log(`Connected to VersaDB as ${process.env.VERSA_USER}: ${vdb}`)
}

//testDb()
//
// These are required for our backend to work
// cors is currently set to accept * (all)
// We want to accept urlencoded data for uploads
// And we need to use json
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Serve landing page (index)
app.use("^/$", (req, res) =>{
    res.status(200).json({"message": "Hello World"})
})

// Serve json @/api
app.use("^/api$", (req, res) =>{
    res.status(200).json({"message": "Hello World"})
})

// Serve HTML @/credits.html
app.use("^/credits.html", (req, res) => {
    res.sendFile(path.join(__dirname, "html", "credits.html"))
})

// Send all other requests to 404 not found
app.use("/", (req, res)=> {
    res.status(404).sendFile(path.join(__dirname, "html", "404.html"))
})
/*
https.createServer({
This is used on the production system
}, app).listen(PORT, ()=> console.log(`Server running on ${PORT}`))
*/
app.listen(PORT, () => console.log(`Server running on ${PORT}`))
