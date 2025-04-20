const item = require('../models/inventory');


exports.addItem = async (req, res)=>{
    console.log("received item: ", req.body);
 try{
        const { itemName, description, price, quantity } = req.body;
        const newItem = await item.create({
            itemName,
            description,
            price,
            quantity
        });
        res.status(201).json(newItem);
 } catch (error) {
    
        res.status(500).json({ message: error.message });
 }
}

exports.getItems = async (req, res)=>{
 try{
     const items = await item.findAll();
     res.status(200).json(items);
 }catch(err){
    res.status(500).json({ message: err.message });
 }
}

exports.getItemById = async (req, res)=>{
     try{
        const {id} = req.params;
        const items = await item.findByPk(id);

        if(!items){
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json(items);
     }catch(err){
        res.status(500).json({ message: err.message });
     }
}

exports.updateItem = async (req, res)=>{
    
    try{
        const {id} = req.params;
        const {quantity} = req.body;
        const itemToUpdate = await item.findByPk(id);
        if(!itemToUpdate){
            return res.status(404).json({message: 'Item not found'});
        }

        
        itemToUpdate.quantity = quantity;
     
        await itemToUpdate.save();
        res.status(200).json(itemToUpdate);


    }catch(err){
        res.status(500).json({message: err.message});
    }
}