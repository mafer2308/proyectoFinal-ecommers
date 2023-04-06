const createUser = async (req, res, next) => {
    try {
        const body = req.body;
        const user = await UserServices.add(body);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};
module.exports = {
    createUser,
}