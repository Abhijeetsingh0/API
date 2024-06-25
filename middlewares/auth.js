const jwt = require('jsonwebtoken')
const User = require('../database/model/user')

const authenticate = async (req, res, next) => {
    const token = req.header.authention?.split(' ')[1];

    if (!token){
        return res.status(401).json({message:'Authentication required'});
    }
    try{
        const decodeToken = jwt.verify(token, process.env.SECRET_KEY)
        const user = await User.findById(decodeToken.userId);
        if (!user){
            return res.status(404).json({message: 'User not found'})
        }
        req.user = user;
        next();
    }catch (err){
        req.status(401).json({message:'Invalid token'})
    }
}

module.exports = {authenticate}