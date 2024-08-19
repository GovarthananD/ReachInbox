import express from "express";
import { User } from "../models/userModel.js";
import { Catagory } from "../models/catagory.js";
import { Expence } from "../models/expence.js";


const router = express.Router();

// User Routes
router.post("/addUser", async (req, res) => {
    try{
        const {username, mobile, email, password, id} = req.body;
        const newUser = new User({
            username,
            mobile,
            email,
            password,
            id
        });

        const savedUser = await newUser.save();
        res.status(201).send({message:"User Added Successfully", savedUser});
    }catch(error){
        res.status(500).send({message:"Internal server error",error});
    }
});

// Catagory Routes
router.post("/addCatagory", async (req, res) => {
    try{
        const {title, description} = req.body;
        const newCatagory = new Catagory({
            title,
            description,
        });
        const savedCatagory = await newCatagory.save();
        res.status(201).send({message: "Catagory Added", savedCatagory});
    }catch(error){
        res.status(500).send({message:"Internal server error", error})
    }
});

// Expence Routes
router.post("/addExpence", async (req, res) => {
    try{
        const {userId, amount, catagory, date, description} = req.body;
        const addExpence = new Expence({
            userId,
            amount,
            catagory,
            date,
            description
        });
        const savedExpence = await addExpence.save();
        res.status(201).send({message:"Expence Added", savedExpence});
    }catch(error){
        res.status(500).send({message:"Internal server error", error});
    }
})

router.get("/getExpence", async (req, res) => {
    try{
       const result = await Expence.find();
       res.status(200).send({message:"List of datas", result})
    }catch(error){
        res.status(500).send({message:"Internal Server Error"})
    }
})

router.get("/getExpence/:id", async (req, res) => {
    const {userId} = req.params;

    try{
        const result = await Expence.findOne({userId});
        if(result){
            res.status(200).send({result})
        }else{
            res.status(404).send({message:'Result not found' });
        }
    }catch(error){
        res.status(500).send({message:"Internal server error"})
    }
});



export const Users = router;
