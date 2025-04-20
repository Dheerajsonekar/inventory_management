const item = requier('../models/inventory');


exports.addItem = async (req, res)=>{
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

}

exports.getItemById = async (req, res)=>{

}

exports.updateItem = async (req, res)=>{

}