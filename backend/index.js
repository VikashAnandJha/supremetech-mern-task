require('dotenv').config()
const express = require("express")
const app = express()
const port = process.env.BACKEND_PORT || 3000
const userAuthRoutes = require('./routes/UserAuthRoute');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', userAuthRoutes);
app.get("/ping", (req, res) => {
    res.send("app is live")
})

app.listen(port, () => {
    console.log(`app is listening on ${port}`)
})