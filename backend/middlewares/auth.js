import jwt from 'jsonwebtoken' 
import User from '../models/User.js'

export const authorize =  (allowedRoles) => {
    return (req, res, next) => {
        const user = req.user;

        if(!user || !allowedRoles.includes(user.role)){
            return res.status(403).json({ message: 'Access denied' })
        }
        next();
    } 
}

