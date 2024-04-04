const { Router } = require("express")
const usersRoutes = Router()
const UsersController = require("../controllers/UsersController")
const usersController = new UsersController()

function myMidddleware(require, response, next) {
    console.log("Você passou!")
    next()
}

usersRoutes.post("/", myMidddleware, usersController.create)
module.exports = usersRoutes


