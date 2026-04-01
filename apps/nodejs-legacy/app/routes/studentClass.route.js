const {validateToken} = require("../controller/auth.controller")
const studentClass = (app)=>{    
    const studentClassController = require("../controller/studentClass.controller");
    app.get("/api/studentClass",studentClassController.getAll);
    app.post("/api/studentClass/:id",studentClassController.getAll);
    app.post("/api/studentClass",studentClassController.create);
    app.put("/api/studentClass",studentClassController.edit);
    app.delete("/api/studentClass",studentClassController.remove);
}
module.exports = studentClass;