var {User} = require('../models')
var jwt = require('jsonwebtoken')
var config = require('../config/config')

function jwtSignUser (user) {
    var ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
   async register (req, res) {
       try {
        var user = await User.create(req.body)
        var userJson = user.toJSON()
        res.send({
            user: userJson,
            token: jwtSignUser(userJson)
        })
       } catch (err) {
           res.status(400).send({
               error: 'this email is already in use.'
           })
       }
  },
   async login (req, res) {
       try {
        var {email, password} = (req.body)
        var user = await User.findOne({
            where: {
                email: email
            }
        })
        if (!user) {
            return res.status(403).send({
                error: 'The Login information was incorrect'
            })
        }
        
        var isPasswordValid = await user.comparePassword(password)
        if (!isPasswordValid) {
            return res.status(403).send({
                error: "The Login Information was incorrect"
            })
        }
        
        var userJson = user.toJSON()
        res.send({
            user: userJson,
            token: jwtSignUser(userJson)
        })
       } catch (err) {
           res.status(500).send({
               error: 'An error has occured trying to login.'
           })
       }
  }
}