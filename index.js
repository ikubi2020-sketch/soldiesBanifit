import express from "express"
import "dotenv/config"
import soldierRoute from "./routes/soldiersRout.js"
import budgetRoute from "./routes/budgetRout.js"



const PORT = process.env.PORT

const app = express()

app.use(express.json())

app.use("/benefits", budgetRoute)

app.use("/soldiers", soldierRoute)


app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})