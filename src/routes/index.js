const {Router} = require("express");

const usersRouter = require("./users.routes.js");
const notesRouter = require("./notes.routes.js");
const tagsRoutes = require('./tags.routes');

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/notes", notesRouter);
routes.use('/tags', tagsRoutes);

module.exports = routes;