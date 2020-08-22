const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var cors = require("cors");
// Settings Cors
app.use(cors());

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("port", process.env.PORT || 3000);
app.use(require("./src/routes/index.routes"));

app.listen(app.get("port"), () => {
    console.log('Started on port', app.get("port"));
})