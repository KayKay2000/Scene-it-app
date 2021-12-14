// To create buttons
function renderMovies(movies) {
    const movieHtmlArray = movies.map(function (currentMovie, index) {
        return ` <button class="btn btn-primary" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#multiCollapseExample${index}" 
        aria-expanded="false" 
        aria-controls="multiCollapseExample2" 
        id="showBtn" >
        ${currentMovie.Title}
        </button>`})
    const buttons = document.querySelector(".buttons")
    // to keep button present on page all the time 
    movieHtmlArray.push(`<button class="btn btn-primary" 
    type="button" data-bs-toggle="collapse" 
    data-bs-target=".multi-collapse" 
    aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2" 
    id="showBtn" >All Movies</button>`)
    buttons.innerHTML = movieHtmlArray.join('')
}


// To create movie cards
function renderMovies2(movies) {
    const movieHtmlArray = movies.map(function (currentMovie, index) {
        return ` <div class="col">
        <div class="collapse multi-collapse" id="multiCollapseExample${index}">
        <div class="card card-body">
            <div class="movie-image"><img src= ${currentMovie.Poster} height=400px /></div>
            <label class="movie-label">${currentMovie.Title}</label>
            <div class="date">${currentMovie.Year}</div>
            <button class="addBtn add-button" type="submit" id="searchAdd" data-imdbid="${currentMovie.imdbID}">Add</button>
        </div>
        </div>
    </div>`
    })

    const row = document.querySelector(".row1")
    row.innerHTML = movieHtmlArray.join("")

}
document.addEventListener('DOMContentLoaded', function () {
    // code here will execute after the document is loaded 
});


// to search
const search = document.querySelector("#search-form")
const input = document.querySelector(".search-bar")
let urlEncodedSearchString = encodeURIComponent(input);
search.addEventListener("submit", event => {
    event.preventDefault();
    const text = input.value
    let urlEncodedText = encodeURIComponent(text);
    fetch("http://www.omdbapi.com/?apikey=59354c85&s=" + urlEncodedText)
        // same thing as return response.json()
        .then(response => response.json())
        .then(data => {
            // console.log(data.Search)<---tester
            // movieData= data.Search
            const loadedMovies = data.Search;
            renderMovies(data.Search);
            renderMovies2(data.Search);
            document.addEventListener("click", event => {
                if (event.target.classList.contains("add-button")) {
                    let movieID = event.target.dataset.imdbid
                    saveToWatchlist(movieID, loadedMovies);
                }
            })
        })
})

function saveToWatchlist(movieID, moviesArray) {
    const movie = moviesArray.find(currentMovie => {
        if (currentMovie.imdbID == movieID) {
            return currentMovie;
        }
    })
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);
    
    if (watchlist == null) {
        watchlist = [];
    }
    watchlist.push(movie);
    for (let i = 0; i < watchlist.length; i++){
        if (watchlist[i] == null){
            watchlist.splice(i, 1)
        }
    }
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
}