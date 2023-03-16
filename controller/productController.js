const productService = require("../services/productService")

module.exports.createProduct = async (req,res) =>{
    const response = {}    
    try{
        const responseFromService = await productService.createProduct(req.body)
        response.status = 200
        response.message = "Product created successfully"
        response.body = responseFromService
    } catch (err) {
        console.log("Somthing went wrong in product contoller ", err)
        response.status = 400
        response.message = err.message
        response.body = {}
    }
    return res.status(response.status).send(response)
}