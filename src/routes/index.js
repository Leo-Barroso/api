const { Router } = require("express")
const usersRoute = require("./user.routes")
const routes  = Router()
routes.use("/users", usersRoute)
module.exports = routes

