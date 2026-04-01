const{
    getAll,
    create, 
    update,
    remove
} = require("../controller/permission.controller");

const {validateToken} = require("../controller/auth.controller")
const course = (app)=>{
    app.get("/api/permission",getAll)
    app.post("/api/permission",create)
    app.put("/api/permission",update)
    app.delete("/api/permission",remove)
}
module.exports = course;