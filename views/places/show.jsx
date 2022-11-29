const React = require('react')
const Default = require('../default')

function show (data) {
    return (
        <Default>
            <main>
                <h1>{data.place.name}</h1>
                <body>
                    <h2>rating <p>unrated</p></h2>
                    <h3>Description<p> yada yada</p></h3>
                </body>
                <h4>Comments<p>No comments yet</p></h4>
                <a href={`/places/${data.id}/edit`} className='btn btn-warning'>Edit</a>
                <form method='POST' action= {`/places/${data.id}?_method=DELETE`}>
                    <button type='submit' className='btn btn-danger'>Delete</button>
                </form>
            </main>
        </Default>
    )
}

module.exports = show