const fs = require("fs");

function requestHandler(req, res) {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", chunk => {
      console.log(chunk);
      // <Buffer 6d 65 73 73 61 67 65 3d 63 78 7a 78 63>
      // data not usable
      body.push(chunk);
    });
    // just registering the listener, will be called later
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody); // message=<user input>
      const message = parsedBody.split("=")[1]; // <user input>
      // writeFileSync meaning everything runs when writing is done
      fs.writeFile("message.txt", message, err => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body><h1>Hello from my Node.js server!</h1></body>");
  res.write("</html>");
  res.end();
}

// module.exports = {
//   handler: requestHandler,
//   someText: "hard coded text"
// };

// module.exports.handler = requestHandler;
// module.exports.someText = "hard coded text";

exports.handler = requestHandler;
exports.someText = "hard coded text";
