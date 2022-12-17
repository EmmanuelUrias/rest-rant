const React = require('react')
const Default = require('../default')

function show (data) { // data = { id: id, place: place }
    let comments = (
        <h3 className='inactive'>No comments yet</h3>
    )

    let rating = (
        <h3 className='inactive'>Not yet rated</h3>
    )

    if(data.place.comments.length) {
        let sumRating = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        
        let averageRating = Math.round(sumRating / data.place.comments.length)
        
        let stars = ''
        
        for (let i = 0; i < averageRating; i++) {
            stars += '⭐️'
        }
        rating = (
            <h3>{stars} stars</h3>
        )

        comments = data.place.comments.map(c => {
            return (
                <div className='border'>
                    <h2 className='rant'>{c.rant ? 'Rant!' : 'Rave!'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }

    let message = ''
    if (data.message) {
        message = (
            <h4 className='alert-danger'>{data.message}</h4>
        )
    }
    return (
        <Default>
            <main>
                <header> 
                    <h1>Add a New Place</h1>
                {message}
                </header>
                <h1>{data.place.name}</h1>
                <img src={data.place.pic} alt= {data.place.name}></img>
                <h3>Located in {data.place.city}, {data.place.state}</h3>
                <body>
                    <h4>Rating</h4>
                    {rating}
                    <h3>Description</h3>
                    <h3>{data.place.showEstablished()}</h3>
                    <h4>Serving {data.place.cuisines}</h4>
                </body>
                <h4>Comments</h4>
                {comments}
                <a href={`/places/${data.id}/edit`} className='btn btn-warning'>Edit</a>
                <form method='POST' action= {`/places/${data.id}?_method=DELETE`}>
                    <button type='submit' className='btn btn-danger'>Delete</button>
                </form>
                <form method='POST' action = {`/places/${data.place.id}/comment/${comments.id}?_method=PUT`}>
               <div className='row'>
                <div className = 'form-group col-sm-6 col-md4'>
                        <label htmlFor = "author">Author</label>
                        <input className = 'form-control' id = "author" name = "author" value = {data.place.comments.author} required/>
                    </div>
                    <div className = 'form-group col-sm-6 col-md4'>
                        <label htmlFor = 'stars'>Rating</label>
                        <input className = 'form-control' type = 'number' min = '0' max = '5' step = '0.5' id = 'stars' name = 'stars' value = {data.place.comments.stars}/>
                    </div>
                    <div className = 'form-group'>
                        <label htmlFor = 'content'>Content</label>
                        <input className = 'form-control' id = "content" name = "content" value = {data.place.comments.content}/>
                    </div>
                    <div className = 'form-group'>
                        <label htmlFor = 'rant'>Rant----</label>
                        <input className = 'checkbox' type= 'checkbox' id = 'rant' name = 'rant' value = {data.place.comments.rant}/>
                    </div>
                    <input className = 'btn btn-primary' type = 'submit' value = 'Add Comment'/>
                    </div>
                    <form method = 'POST' action = {`/places/${data.place.id}/comment/${comments.id}?_method=DELETE`}>
                        <input type = 'submit' className = 'btn btn-danger' value = 'Delete Comment'></input>
                    </form>
                </form>
            </main>
        </Default>
    )
}

module.exports = show