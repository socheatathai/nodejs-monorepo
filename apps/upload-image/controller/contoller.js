const db = require("../config/db")
const createCotroller = (req, res) => {
    if (!req.file) {
      console.log("No file upload");
    } else {
      var { image_name } = req.body;
      console.log(req.file.filename);
      var imgsrc = req.file.filename;
      var insertData = "INSERT INTO images (image_data,image_name) VALUES (?, ?)";
      db.query(insertData, [imgsrc, image_name], (err, result) => {
        if (err) throw err;
        res.send("success");
        console.log("file uploaded");
      });
    }
  };
module.exports = createCotroller;