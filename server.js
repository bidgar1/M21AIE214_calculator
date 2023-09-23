const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/calculate', (req, res) => {
    const requestJSON = req.body;
    let result;

    switch (requestJSON.operation) {
        case 'addition':
            result = requestJSON.numbers.reduce((acc, curr) => acc + curr, 0);
            break;
        case 'subtraction':
            if (requestJSON.numbers.length == 2) {
                result = requestJSON.numbers.reduce((acc, curr) => acc - curr);
            } else {
                result = "For subtraction only two numbers are required";
            }
            break;
        case 'division':
            if (requestJSON.numbers.length == 2) {
                result = requestJSON.numbers.reduce((acc, curr) => acc / curr);
            } else {
                result = "For division only two numbers are required";
            }
            break;
        case 'multiplication':
            result = requestJSON.numbers.reduce((acc, curr) => acc * curr, 1);
            break;
        default:
            return res.status(400).json({ "message": "Invalid operation" })
    }
    res.status(200).send({ "result": result });
});

var server = app.listen(9032, () => {
    console.log("Server started on port 9032");
});

server.keepAliveTimeout = 61 * 10000;
server.headersTimeout = 65 * 10000;