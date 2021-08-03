const books = require("../models/books.js");
const usersignup = require('../models/userSignup');

//to get all books
let getAllBooks = async(req,res) => {
    try {
        const foundAll = await books.find({}).populate("usersbook");
        res.status(200).json(foundAll);
    } catch (error) {
        res.status(500).json("SERVER ERROR");
    }
};

//save(create) the books data 
let saveBooks = async(req,res) => {
    let {title, author, description, publishDate, pages, cost, usersbook } = req.body;
    try {
        const newBooks = new books({
            title, author, description, publishDate, pages, cost, usersbook
        });
        await newBooks.save().populate("usersbook");
        return res.status(201).json("success");
    } catch (error) {
        console.error(err);
        res.status(500).json("SERVER ERROR");
    }
}

//to edit the books data by id
let editBooks = async(req,res) => {
    let { title, author, description, publishDate, pages, cost } = req.body;
    try {
        let updateBooks = await books.findByIdAndUpdate(
            req.params.id,
            {
                title, author, description, publishDate, pages, cost
            },
            { new: true }
          );
        // await (await updateBooks).save();
        return res.status(201).json(updateBooks);
      } catch (err) {
        console.error(err);
        res.status(500).json("SERVER ERROR");
      }
}

//to delete the books data by id
let deleteBooks = async(req,res) => {
    try {
        let deletebks = await books.findByIdAndDelete(req.params.id);
        // await (await updateBooks).save();
        return res.status(201).json(deletebks);
      } catch (err) {
        console.error(err);
        res.status(500).json("SERVER ERROR");
      }
}

//to find the books data by id
let findBooks = async(req,res) => {
    try {
        let findBks = await books.findOne({ _id: req.params.id });
        // await (await updateBooks).save();
        return res.status(201).json(findBks).populate("usersbook");
      } catch (err) {
        console.error(err);
        res.status(500).json("SERVER ERROR");
      }
}

//to find the books data by id
let usersId = async(req,res) => {
    try {
        let userIds = await books.find({ usersbook : req.params.id });
        // await (await updateBooks).save();
        if (userIds === []) {
            return res.status(401).json("Not found");
        }
        return res.status(201).json(userIds).populate("usersbook");
      } catch (err) {
        console.error(err);
        res.status(500).json("SERVER ERROR");
      }
}

module.exports = {getAllBooks, saveBooks ,editBooks ,deleteBooks ,findBooks ,usersId};