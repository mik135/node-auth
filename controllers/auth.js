import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'
import User from "../models/User"

// Register a new user
const register = async (req, res, next) => {
    const { username, email, password} = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword });
        await user.save()
        res.json({ message: 'Registration successful'});
    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
    }
}