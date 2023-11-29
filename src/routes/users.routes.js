const { Router, response } = require("express");
const multer = require("multer");
const uploagConfig = require("../configs/upload");

const UsersController = require("../controllers/UsersController");
const UserAvatarController = require("../controllers/UserAvatarController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router();
const upload = multer(uploagConfig.MULTER);

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update);

module.exports = usersRoutes;