const emailController = require("..controlers.EmailController");

async function EmailRoutes(server) {
  server.post("/send", emailController.sendEmail);
}

module.exports = EmailRoutes;
