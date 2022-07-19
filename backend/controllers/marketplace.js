import Market from "../models/marketModel.js";

export const getToys =  async (req, res) => {
    try {
        const listToys = await Toy.find()
        res.status(200).json(listToys);
    } catch (error) {
        res.status(404).json({message: error.message })
    }  
}

export const getOneToy = async (req, res) => {
    try {
        const myToy = await Toy.findById({_id: req.params.id})
        res.status(200).json(myToy);
    } catch (error) {
        res.status(404).json({message: error.message })
    } 
}

export const createToy = async (req, res) => {
    try {
        const newToy = await Toy.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            url: req.body.url,
            quantity: req.body.quantity
        })
        res.status(200).json(newToy)
    } catch (error) {
        res.status(404).json({message: error.message })
    }    
}

export const updateToy = async (req, res) => {
    try {
        const updatedToy =  await Toy.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json(updatedToy)
    } catch (error) {
        res.status(404).json({message: error.message })
    }   
}

export const deleteToy = async (req, res) => {
    try {
        const deletedToy = await Toy.deleteOne({_id: req.params.id})
        res.status(200).json(deletedToy)
    } catch(error) {
        res.status(404).json({message: error.message })
    }  
}