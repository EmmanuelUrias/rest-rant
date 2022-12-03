const React = require('react')
const Default = require('./default')

function error404 () {
   return ( 
   <Default>
        <main>
            <h1>404: PAGE NOT FOUND</h1>
            <p>Oops, sorry, we can't find this page!</p>
            <img src="public/images/cute-cat-photos-1593441022.jpg" alt="Cute cat"></img>
            <div>
                Photo by <a href="https://www.womansday.com/author/225089/Jessica-Booth/">Jessica Booth</a> on <a href="https://www.womansday.com/life/g32979681/cute-cat-photos/"></a>
            </div>
        </main>
    </Default>
   )
}

module.exports = error404