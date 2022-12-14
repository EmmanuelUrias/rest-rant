const React = require('react')
const Default = require('./default')

function home () {
    return (
        <Default>
            <main>
                <h1>Rest-Rant</h1>
                <div>
                    <img className='treeImage' src="/images/sanjeevan-satheeskumar-MG8c-4n1QVE-unsplash.jpg" alt="Tree"></img>
                    <div>
                        Photo by <a href="https://unsplash.com/@evannn_n">Sanjeevan SatheesKumar </a> on <a href="https://unsplash.com/s/photos/free">Unsplash</a>
                    </div>
                </div>
            </main>
            <a href="/places">
                <button className="btn-primary">Places Page</button>
            </a>
        </Default>
    
    )
}

module.exports = home