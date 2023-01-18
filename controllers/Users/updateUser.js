const { isValidObjectId } = require('mongoose');
const userModel = require('../../models/User')

//update User
async function updateUser(req, res, next)
{
    const user_uuid = req.params.user_uuid;
    let { firstName, lastName, email } = req.body

    const validId = isValidObjectId(user_uuid)
    if(validId)
    {
        const userObject = {
            firstName : firstName,
            lastName : lastName,
            email : email
        }

        userModel.findOneAndUpdate({ _id: user_uuid }, {$set : userObject}, {new : true}).then(result => {
            if(result)
            {
                res.status(201).json({
                    status: 201,
                    message: "User Updated Successfully !",
                    data: result
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
    updateUser : updateUser
}