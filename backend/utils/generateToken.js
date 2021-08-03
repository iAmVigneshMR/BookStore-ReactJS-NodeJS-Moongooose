const jwt = require("jsonwebtoken");

const generateToken = (id) => {
    return jwt.sign({id}, "vigneshmr", {
        expiresIn:"30d",
    })
}

module.exports = generateToken;