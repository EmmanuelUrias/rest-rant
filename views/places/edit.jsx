const React = require('react')
const Default = require('../default.jsx')

function editForm (data) { // data = { place: <value> }
    return (
        <Default>
            <main>
            <form method = "POST" action = {`/places/${data.place.id}?_method=PUT`}>
                <div className = 'row'>
                    <div className = 'form-group'>
                        <label htmlFor = "name">Place Name</label>
                        <input className = 'form-control' id = "name" name = "name" value = {data.place.name} required/>
                    </div>
                    <div className = 'form-group'>
                        <label htmlFor = 'pic'>Place Picture</label>
                        <input className = 'form-control' type = "url" id = "pic" name = "pic" value = {data.place.pic}/>
                    </div>
                    <div className = 'form-group col-sm-6 col-md4 col-lg-3'>
                        <label htmlFor = 'city'>City</label>
                        <input className = 'form-control' id = 'city' name = 'city' value = {data.place.city}/>
                    </div>
                    <div className = 'form-group col-sm-6 col-md4 col-lg-3'>
                        <label htmlFor = 'state'>State</label>
                        <input className = 'form-control' id = 'state' name = 'state' value = {data.place.state}/>
                    </div>
                    <div className = 'form-group'>
                        <label htmlFor = 'cuisines'>Cuisines</label>
                        <input className = 'form-control' id = 'cuisines' name = 'cuisines' value = {data.place.cuisines} required/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='founded'>Founded</label>
                        <input className='form-control' id='founded' name='founded' value={data.place.founded}></input>
                    </div>
                    <input className = 'btn btn-primary' type = 'submit' value = 'Edit Place'/>
                    </div>
                </form>
            </main>
        </Default>
    )
}

module.exports = editForm