const router = require('express').Router()
const db = require('../models')

//index
router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
        res.render('places/index', { places })
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
})

//Create
router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
       if (err && err.name == 'ValidationError') {
            let message = 'Validation Error: '
            for (var field in err.errors) {
                message += `*${field} was ${err.errors[field].value}*`
                message += `${err.errors[field].message}`
            }
            console.log('Validation error message', message)
            res.render('places/new', { message })
       }
       else {
        res.render('error404')
       }
    })
})

//New
router.get('/new', (req, res) => {
    res.render('places/new')
})

//Show
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
        res.render('places/show', { place, id: req.params.id }) //{ id: id, place: place }
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
})

//Update
router.put('/:id', (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then(place => {
        res.redirect(`/places/${req.params.id}`)
    })
    .catch(err => {
        res.render('error404')
    })
})

//Delete
router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
    .then(place => {
        res.redirect('/places')
    })
    .catch (err => {
        res.render('error404')
    })
})

//Edit
router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('places/edit', { place: place })
    })
    .catch(err => {
        res.render('error404')
    })
})

// comment
router.post('/:id/comment', (req, res) => {
    db.Comment.findById(req.params.id)
    console.log(req.params.id)
    res.send('GET /places/:id/comment stub')
})


module.exports = router