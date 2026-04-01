const express = require("express");
const app = express();
const cors = require("cors");
const { loadEnv, csvToArray } = require("@nodejs-doc/config");
const { APP_ENVS } = require("@nodejs-doc/types");

loadEnv(__dirname);

app.use(express.json());
app.get("/",(req,res)=>{
    res.json({
        title : "default node api "
    })
})

const allowedOrigins = csvToArray(process.env.ALLOWED_ORIGINS);
const corsOrigin = allowedOrigins.length > 0 ? allowedOrigins : "*";

app.use(cors({
    origin: corsOrigin
}));



//import routes
require("./app/routes/teacher.route")(app);
require("./app/routes/student.route")(app); 
require("./app/routes/customer.route")(app);
require("./app/routes/course.route")(app);
require("./app/routes/category.route")(app);
require("./app/routes/classroom.route")(app);
require("./app/routes/studentClass.route")(app);
require("./app/routes/auth.routes")(app);
require("./app/routes/role.routes")(app);
require("./app/routes/permission.route")(app);
require("./app/routes/user.route")(app);






const port = process.env.PORT || 3001;// auto change port if duplicate
if (!APP_ENVS.includes(process.env.NODE_ENV || "development")) {
    console.warn("NODE_ENV is not standard. Expected one of:", APP_ENVS.join(", "));
}
app.listen(port,()=>{
    console.log("server run on port : http://localhost:"+port);
})