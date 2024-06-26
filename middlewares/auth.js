const jwt = require('jsonwebtoken')
const User = require('../database/model/user');
const { json } = require('body-parser');

const authenticate = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    console.log(token)
    if (!token){
        return res.status(401).json({message:'Authentication required'});
    }
    try{
        const decodeToken = jwt.verify(token, process.env.SECRET_KEY)
        console.log(decodeToken)
        const user = await User.findById(decodeToken.emailId);
        if (!user){
            return res.status(404).json({message: 'User not found'})
        }
        req.user = user;
    }catch (err){
        req.status(401).json({message:'Invalid token'})
    }
    next();
}

module.exports = {authenticate}