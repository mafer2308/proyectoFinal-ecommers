const { Router } = require("express");
const { createUser } = require("../controllers/user.controllers");
const router = Router();

//crear un user
router.post('/user',createUser);

router
.route("/user/:id")
// optener un user
.get( async (req, res, next) => {
    try {
    const user = await User.findAll();
    res.json(user);
    } catch (error) {
        res.status(400).json(error);
    }
})

// actualizar un user
.put(() => {console.log('put');
})
//eliminar un user
.delete(() => {
    console.log('delete');
});


module.exports = router;