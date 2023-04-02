const { Router } = require('express');

const router = Router();

//crear un user
router.post('/user');

router.route('/user/:id')
// optener un user
.get()//como se que llevan la mismo ruta
// actualizar un user
.put()
//eliminar un user
.delete()

module.exports = router;