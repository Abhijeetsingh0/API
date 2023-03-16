const Product = require("../database/model/product")

module.exports.createProduct = async (productData) => {
    try{
        const product = new Product({name:productData.name,brand:productData.brand,price:productData.price})
        return await product.save();
    }catch(err){
        console.log("Somthing went wrong while creating product ", err)
    }
    
}