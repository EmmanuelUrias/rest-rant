const db = require('../models')

async function seedComment() {
    //Getting place
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })


//fake comment
    let comment = await db.Comment.create({
        author: 'Paul Eatalot',
        rant: false,
        stars: 5.0,
        content: 'wowww'

    })

//Adding comment to places comment array
    place.comments.push(comment.id)

//place is saved with comment
    await place.save()

    process.exit()
}

seedComment()