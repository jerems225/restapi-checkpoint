const userModel = require('../../models/User')

//Create User
async function createUser(req, res, next)
{
    let { firstName, lastName, email } = req.body

    const userObject = {
        firstName : firstName,
        lastName : lastName,
        email : email
    }

    var newUser = new userModel(userObject)
    newUser.save((err, data) => {
        if(err)
        {
            res.status(500).json({
                status: 500,
                message: "Somethings wrong on the sevrer side, please try again or check the error message !",
                error: err
            })
        }
        else
        {
            res.status(201).json({
                status: 201,
                message: "User created successfully !",
                data: data
            })
        }
    })
}

module.exports = {
    createUser : createUser
}