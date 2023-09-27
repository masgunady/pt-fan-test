const argon  = require('argon2')
const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const errorHandler = require('../helpers/errorHandler.helper')
const {APP_SECRET} = process.env

exports.login =  async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await userModel.findOneWithEmail(email)
        if(!user){
            throw Error('wrong_credentials')
        }

        const verify = await argon.verify(user.password, password)
        if(!verify){
            throw Error('wrong_credentials')
        }

        const token = jwt.sign({id: user.id}, APP_SECRET)
        return res.json({
            success: true,
            message: 'Login successful!',
            results: {token}
        })

    } catch (err) {
        return errorHandler(res, err)
    }
}

exports.register = async (req, res) => {
    try {
        const {nama, email, npp, nppSupervisor, password} = req.body
        const checkDuplicate = await userModel.findOneWithEmail(email)
        if(checkDuplicate){
            throw Error('email_has_registered')
        }

        const hash = await argon.hash(password)
        const data = {
            nama,  
            email,
            npp,
            npp_supervisor: nppSupervisor,
            password: hash,
        }
        const user = await userModel.create(data)

        const results = {
            id: user.id,
            nama: user.nama,
            email: user.email,
            createdAt: user.createdAt
        }

        return res.json({
            success: true,
            message: 'Registration successful!',
            data : results
        })

    } catch (err) {
        return errorHandler(res, err)
    }
}