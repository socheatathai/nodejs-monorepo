const path = require("path");
const dotenv = require("dotenv");

function loadEnv(cwd) {
  const envPath = path.resolve(cwd || process.cwd(), ".env");
  dotenv.config({ path: envPath });
}

function csvToArray(value) {
  if (!value) return [];
  return value.split(",").map((item) => item.trim()).filter(Boolean);
}

module.exports = {
  loadEnv,
  csvToArray,
};
