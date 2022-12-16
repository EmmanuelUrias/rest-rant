const db = require('../models')

db.Place.create ([
    {
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA', 
        cuisines: 'Thai, Pan-Asain',
        pic: 'images/image of cafe.jpeg',
        founded: 1989
    }, 
    {
        name: 'Coding Cat Cafe', 
        city: 'Pheonix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/cute-cat-photos-1593441022.jpg',
        founded: 2020
    }
])
.then(() => {
    process.exit()
})
.catch(err => {
    console.log('err')
    process.exit()
})
