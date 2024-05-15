const productsDB = require('../models/products');


const getAllProductsByCategory = async (req, res, next) => {
    try {
        const categoryId = req.params.categoryId
        const products = await productsDB.findById(categoryId);
        res.send(products);
    }
    catch (err) {
        res.status(404).send('category not found')
    }
};


const getAllProductsByCategoryAndProduct = async (req, res, next) => {
    try{
        const categoryId = req.params.categoryId;
        const productId = req.params.productId;
        const product = await productsDB.findById(productId)
        if(product.categoryId == categoryId) 
            res.send(product)
        else{
            res.status(404).send('product exist in another category')
        }
    }
    catch (err) {
        res.status(404).send('product not found')
    } 
};


const addProduct = async (req, res) => {
    try{
        const newProduct = new productsDB({name: req.body.name, categoryId: req.body.categoryId});
        await newProduct.save();
        res.status(201).send('Product saved successfully')
    } catch(err){
        res.status(500).send('Error saving category');
    }
};


const updateProduct = async (req, res) => {
    try{
        const productId = req.params.id
        await productsDB.findByIdAndUpdate(productId, {name: req.body.name, categoryId: req.body.category})
        res.send('Product updated successfully')
    }
    catch(err){
        res.status(404).send('product not found');
    }
};

const removeProduct = async (req, res) => {
  try{
    const productId = req.params.id;
    await productsDB.findByIdAndDelete(productId);
    res.send('Product deleted successfully');
}
catch(err){
    res.status(404).send('product not found');
}
};

  module.exports = {
    getAllProductsByCategory,
    getAllProductsByCategoryAndProduct,
    addProduct,
    updateProduct,
    removeProduct
  };
