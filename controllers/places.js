const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
        res.render('places/index', { places })
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
    //res.send('Get /places stub')
})

//Create
router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
    //res.send('POST /places stub')
})

//New
router.get('/new', (req, res) => {
    res.render('places/new')
})

//Show
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('places/show', { place })
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
    //res.send('GET /places/:id stub')
})

//Update
router.put('/:id', (req, res) => {
    res.send('PUT /places/:id stub')
})

//Delete
router.delete('/:id', (req, res) => {
    res.send('DELETE /places/:id stub')
})

//Edit
router.get('/:id/edit', (req, res) => {
    res.send('GET edit form stub')
})

module.exports = router