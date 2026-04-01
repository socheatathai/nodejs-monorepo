const path = require("path");
const { loadEnv } = require("@nodejs-doc/config");

loadEnv(path.resolve(__dirname, "../../"));

const config =  {
    local_token : process.env.JWT_SECRET || "dev-secret-change-me"
};
const isEmpty = (value)=>{
    if(value == null || value == undefined || value == ""){
        return true
    }
    return false;
} 
module.exports = {isEmpty,config};