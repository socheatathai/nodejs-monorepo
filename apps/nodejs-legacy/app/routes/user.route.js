const{
    getAll,
    create, 
    update,
    remove,
    assignRole
} = require("../controller/user.controller");

const {validateToken} = require("../controller/auth.controller")
const course = (app)=>{
    app.get("/api/user",getAll)
    app.post("/api/user/assignRole",assignRole)
    app.post("/api/user",create)
    app.put("/api/user",update)
    app.delete("/api/user",remove)
}
module.exports = course;