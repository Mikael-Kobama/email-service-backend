const fastify = require("fastify");
const server = fastify();
const emailRoutes = require("./routes/email");
const EmailRoutes = require("./routes/email");

server.register(EmailRoutes);

server.listen({
  port: process.env.PORT || 3200,
});
