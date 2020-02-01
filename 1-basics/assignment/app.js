// 1. spin up a node.js driven server on port 3000

const http = require("http");

// 2. handle two routes
// '/' - return some greetings
// '/users' - return a list of dummy users (e.g. <ul><li>User 1</li></ul>)
const routes = require("./routes");

const server = http.createServer(routes);

server.listen(3000);
