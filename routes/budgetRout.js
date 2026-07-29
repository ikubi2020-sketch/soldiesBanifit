import express from "express"

const route = express.Router()

route.post("/", ()=>{})

route.get("/", ()=>{})

route.get("/:id/transaction", ()=>{})

route.post("/:id/spend", ()=>{})


export default route