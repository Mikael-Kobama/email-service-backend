const fastify = require("fastify");
const EmailRoutes = require("./routes/email");
const cors = require("@fastify/cors");
const formbody = require("@fastify/formbody");

const server = fastify();

const corsOptions = {
  credentials: true,
  origin: /localhost\:5173/,
};

server.register(cors, corsOptions);
server.register(formbody);

server.register(EmailRoutes);

server.listen({
  port: process.env.PORT || 3200,
});
