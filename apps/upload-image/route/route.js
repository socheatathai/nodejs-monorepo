const upload = require("../config/multer")
const route = (app) =>{
    const createCotroller = require("../controller/contoller")
    app.post("/post", upload.single("image") , createCotroller);
}
module.exports = route;