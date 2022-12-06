const React = require('react')
const Default = require('../default')

function show (data) {
    return (
        <Default>
            <main>
                <h1>{data.place.name}</h1>
                <img src='/images/h-thai-ml-tables.jpg' alt= {data.place.name}></img>
                <body>
                    <h4>rating <p>unrated</p></h4>
                    <h3>Description</h3>
                    <h3>{data.place.showEstablished()}</h3>
                    <h4>Serving {data.place.cuisines}</h4>
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