const userModel = require('../../models/User')
const { isValidObjectId } = require("mongoose")

async function getUsers(req, res, next)
{
    res.status(201).json({
        status: 201,
        message: "Users found successfully !",
        data: await userModel.find()
    })
}

async function getUser(req, res, next)
{
    const user_uuid = req.params.user_uuid
    const validId = isValidObjectId(user_uuid)
    if(validId)
    {
        userModel.findById(user_uuid).then(result => {
            if(result)
            {
                res.status(201).json({
                    status: 201,
                    message: "User found successfully !",
                    data: result
                })
            }
            else
            {
                res.status(401).json({
                    status: 401,
                    message: "User not found !",
                    data: result
                })
            }
        }).catch((err) => {
            res.status(500).json({
                status: 500,
                message: "Somethings wrong, please try again or check the error message !",
                err: err
            })
        })
    }
    else
    {
        res.status(500).json({
            status: 500,
            message: "Invalid User Uuid"
        })
    }
}

module.exports = {
    getUsers : getUsers,
    getUser : getUser
}