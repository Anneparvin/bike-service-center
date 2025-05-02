import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "default_secret";

export const generateToken = (customerId: String) => {
    return jwt.sign({ customerId }, JWT_SECRET, { expiresIn: "1h" });
}

export const verifyToken = (token: string) => {
    return jwt.verify(token, JWT_SECRET)
}