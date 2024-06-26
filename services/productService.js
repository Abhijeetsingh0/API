const Product = require("../database/model/product")

module.exports.createProduct = async (productData) => {
    try{
        const product = new Product({name:productData.name,brand:productData.brand,price:productData.price})
        return await product.save();
    }catch(err){
        console.log("Somthing went wrong while creating product ", err)
    }
    
}

module.exports.getProducts = async () =>{
    try{
        const products = await Product.find();
        return products
    }catch (err){
        console.log("somthing went wrong while getProducts service :",err)
    }
}

module.exports.getProductById = async (id) =>{
    try{
        return await Product.findById(id)
    }catch(err){
        console.log("Somthing went wrong while getProductById serice :",err)
    }
}