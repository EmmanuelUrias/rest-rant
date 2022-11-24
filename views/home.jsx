const React = require('react')
const Default = require('./default')

function home () {
    return (
        <Default>
            <main>
                <h1>HOME</h1>
            </main>
            <a href="/places">
                <button className="btn-primary">Places Page</button>
            </a>
        </Default>
    
    )
}

module.exports = home