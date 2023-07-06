const http = require("http");

const routes = {
  "/user:get": (request, response) => {
    response.write("User infos");
    return response.end();
  },
  default: (request, response) => {
    response.write("Hello, world");
    return response.end();
  },
};

const handler = function (request, response) {
  const { url, method } = request;
  const routeKey = `${url}:${method.toLowerCase()}`;
  const chosen = routes[routeKey] || routes.default;
  response.writeHead(200, {
    ContenType: "text/html",
  });

  return chosen(request, response);
};

const app = http
  .createServer(handler)
  .listen(3000, () => console.log("App, running at", 3000));

module.exports = app;
