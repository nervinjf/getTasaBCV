const { UserServices } = require('../services');

const getAllUsers = async (req, res, next) => {
    try {
        const result = await UserServices.getAll();

        res.json(result);

    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Algo salio mal"
        })
    }
}

module.exports = {
    getAllUsers,
}