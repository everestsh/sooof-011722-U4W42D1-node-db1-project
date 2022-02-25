const server = require("./api/server.js");
// require('dotenv').config()

// const PORT = process.env.PORT || 9000;
const {PORT} = require('./secrets')

server.listen(PORT, () => {
  console.log(`\n== API running on port ${PORT} ==\n`);
});
