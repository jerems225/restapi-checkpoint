const userModel = require('../../models/User')
const { isValidObjectId } = require("mongoose")

//Delete User
async function deleteUser(req, res, next)
{
    const user_uuid = req.params.user_uuid
    const validId = isValidObjectId(user_uuid)
    if(validId)
    {
        userModel.findByIdAndDelete(user_uuid).then(result => {
            if(result)
            {
                res.status(201).json({
                    status: 201,
                    message: "User removed successfully !"
                })
            }
            else
            {
                res.status(401).json({
                    status: 401,
                    message: "User not found !"
                })
            }
        }).catch(err => {
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
    deleteUser : deleteUser
}