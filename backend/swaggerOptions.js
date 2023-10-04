const swaggerDefinition = require('./swaggerDefinition'); // Update with your swagger definition path

module.exports = {
    swaggerDefinition,
    apis: ['./routes/*.js'], // Update with your route file path
    "securityDefinitions": {
        "bearerAuth": {
            "type": "apiKey",
            "in": "header",
            "name": "Authorization",
            "description": "Bearer token to access these api endpoints",
            "scheme": "bearer"
        }
    }


};
