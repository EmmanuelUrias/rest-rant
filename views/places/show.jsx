const React = require('react')
const Default = require('../default')

function show (data) {
    let comments = (
        <h4 className='inactive'>No comments yet</h4>
    )

    if(data.place.comments) {
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
                    <h4>rating <p>unrated</p></h4>
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
            </main>
        </Default>
    )
}

module.exports = show