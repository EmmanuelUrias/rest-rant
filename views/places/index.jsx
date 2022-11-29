const React = require('react')
const Default = require('../default')
function index (data) {
    let placesFormatted = data.places.map((place, index) => {
        return (
            <div>
                <div key={index} className='col-sm-6'></div>
                <h2>
                    <a href={`/places/${index}`}>
                        {place.name}
                    </a>
                </h2>
                <p className='text-center'>
                    {place.cuisines}
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