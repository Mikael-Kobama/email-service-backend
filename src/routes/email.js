async function EmailRoutes(server) {
  server.get("/", () => {
    return "hello world";
  });
}

module.exports = EmailRoutes;
