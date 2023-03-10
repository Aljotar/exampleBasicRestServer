const { response } = require('express')

const usuariosGet = (req, res) => {

    const { q, nombre= 'no name', apikey } = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey

    });
}
const usuariosPost = (req, res) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
    });
}
const usuariosPut = (req, res) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - controlador',
        id
    });
}
const usuariosDelete = (req, res) => {

    res.json({
        msg: 'delete API - controlador'
    });
}

module.exports = {
    usuariosGet,usuariosPost,usuariosPut,usuariosDelete
}