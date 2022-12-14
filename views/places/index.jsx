const React = require('react')
const places = require('../../models/places')
const Default = require('../default')
function index (data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div>
                <div className='col-sm-6'></div>
                <h2>
                    <a href={`/places/${place.id}`}>
                        {place.name}
                    </a>
                </h2>
                <p className='text-center'>
                    {places.cuisines}
                </p>
                <img src={place.pic} alt={place.name}></img>
                <p className='text-center'>
                    Located in {place.city}, {place.state}
                </p>
            </div>
      )
    })

    return (
        <Default>
             <main>
                 <h1>PLACES to Rave About</h1>
                 <div className='row'></div>
                 {placesFormatted}
            </main>
        </Default>
    )
    }


module.exports = index