require('dotenv').config()
const express = require("express")
const app = express()
const port = process.env.BACKEND_PORT || 3000
const userAuthRoutes = require('./routes/UserAuthRoute');

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./swaggerOptions');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const specs = swaggerJsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/', userAuthRoutes);
app.get("/ping", (req, res) => {
    res.send("app is live")
})

app.listen(port, () => {
    console.log(`app is listening on ${port}`)
})