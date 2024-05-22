const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const clothesSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    }
})

const Clothes = mongoose.model('Clothes', clothesSchema)

app.get('/clothes',async (req, res) => {
    const response = await Clothes.find()
    res.send(response)
})

app.get('/clothes/:id',async (req, res) => {
    const {id} = req.params
    const target = await Clothes.findById(id)
    res.send(target)
})

app.post('/clothes/',async (req, res) => {
    const {title, image, desc} = req.body
    const newItem = new Clothes ({title: title, image: image, desc:desc})
    await newItem.save()
    const allItems = await Clothes.find()
    res.send(allItems)
})

app.delete('/clothes/:id',async (req, res) => {
    const {id} = req.params
    await Clothes.findByIdAndDelete(id)
    const allItems = await Clothes.find()
    res.send(allItems)
})

mongoose.connect('mongodb+srv://lamia:lamia123@cluster0.wca8zcl.mongodb.net/')
.then(res => {
    console.log('connected');
})

app.listen(8080, (req, res) => {
    console.log('port connected');
})