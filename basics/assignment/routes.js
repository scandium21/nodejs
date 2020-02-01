// 2. handle two routes
// '/' - return some greetings
// '/users' - return a list of dummy users (e.g. <ul><li>User 1</li></ul>)

// 3. add a form with a "username" <input> to the '/' page and
// submit a POST request to '/create-user' upon a button click
const routsHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");

    res.write(
      "<html><title>Assignment 1</title><body><h1>Hello!</h1><form action='/create-user' method='POST'><input type='text' name='username' /><button type='submit'>Submit</button></form></body></html>"
    );
    res.end();
  }
  if (url === "/users") {
    res.write(
      "<html><title>Hi there</title><body><ul><li>User 1</li></ul></body></html>"
    );
    res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", chunk => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedData = body.toString();
      console.log(parsedData.split("=")[1]);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
};

module.exports = routsHandler;
