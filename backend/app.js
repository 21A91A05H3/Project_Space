const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const block = require('./models/course');
const app = express();
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://campusguide14:AEfa4wwpwLU4RfkQ@cluster0.cwx3e9k.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0')
.then(() => app.listen(4444))
.then(() =>
console.log("Connected to Database & Listening to localhost 4444")
)
.catch((err) => console.log(err));
    app.post('/adddata', async (req, res) => {
        try {            
            console.log(req.body.formdata);
            const { name, no,floor,campus} = req.body.formdata;
            const dt = new block({
                name,
                no,
                floor,
                campus
            });
            await dt.save();
            return res.status(200).json({ "result": dt });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: "An error occurred while saving data" });
        }
    });


    app.get('/getdata/:campus', async (req, res, next) => {
        let cam = req.params.campus;
        console.log(cam);
        let blockdata;
        try {
            if (cam === 'undefined') {
                console.log("un")
                blockdata = await block.find();
            } else {
                blockdata = await block.find({ campus: cam });
            }
        } catch (err) {
            console.log(err);
        }
        if (!blockdata) {
            return res.status(404).json({ message: "no blocksdata found." });
        }
        return res.status(200).json(blockdata);
    });
    

    app.delete('/deletedata/:id',async(req,res,next)=>{
        let roomdata;
        const id= req.params.id
        try{
            roomdata = await block.findByIdAndDelete({_id:id});
        }catch(err){
            console.log(err);
        }
        if(!roomdata){
            console.log("no rooms found")
        }
        return res.status(200).json({roomdata})
    })


    // Edit form
    app.get('/getblockbyid/:id',async(req,res,next)=>{
        const {id} = req.params
        let blocksdata;
        try{
            blocksdata = await block.findById(id);
        }catch(err){
            console.log(err);
        }
        if(!blocksdata){
            console.log("no blockss found")// return res.status(404).json({message: "no blocksdata found."})
        }
        return res.status(200).json({blocksdata})
    })

    app.put('/updateblock/:id',async(req,res,next)=>
    {
        const {id} = req.params
        const {name, no} = req.body
        let blk;
        try{
            blk = await block.findByIdAndUpdate(id,{name,no}).then(response=>{console.log(response)}).catch(err=>{console.log(err)});
        }
        catch(err){
            console.log(err)
        }
        return res.send({msg:"updated","result":blk})
    })
