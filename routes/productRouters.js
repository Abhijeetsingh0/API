const express = require("express")
const router = express.Router();
const productController = require("../controller/productController")


router.post("/",productController.createProduct)
router.get("/",productController.getProducts)
router.get("/:id",productController.getProductById)

router.delete("/:id",authenticate,productController.deleteProduct)

module.exports = router