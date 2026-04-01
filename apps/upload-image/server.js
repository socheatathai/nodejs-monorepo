const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//use express static folder
app.use(express.static("./public"));

// body-parser middleware use
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//! Use of Multer

//! Routes start
require("./route/route")(app);
//route for Home page
app.get("/", (req, res) => {
  res.json(__dirname);
});

//@type   POST
//route for post data

//create connection
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
