import jwt from 'jsonwebtoken';
import User from '../models/User';

const authenticate = async (req, res, next) => {
    const token = req.headers.authorization?.split('')[1];

    if(!token) {
        return res.status(401).json({ message: 'Authentication Required' });
    }

    try {
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findByid(decodedToken.userId);
        if(!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' })
    }
}

export default authenticate