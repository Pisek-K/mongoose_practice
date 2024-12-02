const express = require('express')

const app = express()

require("dotenv").config()

const mongodbConnect = require('./src/database/mongo')
const { mongodb } = require('./src/models/mongo.model')


mongodbConnect()

// app.use("*",express.json())
app.post("*",express.json())
app.patch("*",express.json())
app.put("*",express.json())

app.post("/", async (req, res) => {
    const { name , age} = req.body
    await mongodb.user.create({ name, age })
    res.status(201).json("Ok")
})

app.get("/all", async (req, res) => {
    try {
      const data = await mongodb.user.find({});
      res.status(200).json({ user: data });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

app.patch("/:id" , async (req,res) => {
    const {id} = req.params 
    const {name} =req.body
    const user = await mongodb.user.updateOne({_id : id}, {name})
    res.status(200).json(user)
})

app.delete("/:id",async (req,res)=> {
    const {id} = req.params
    await mongodb.user.deleteOne({_id: id})
    res.status(204)
})  

const port = process.env.PORT 
app.listen(port, () => console.log(`Server is running on port : ${port}`)
)