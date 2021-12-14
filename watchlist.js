function createMovieArray() {
    // importing from local storage but don't know how to interpret it 
    const watchlistJSON = localStorage.getItem('watchlist')
    // formats info from local storage so that it's readable 
    const watchlist = JSON.parse(watchlistJSON);
    // console.log(watchlistJSON);
    return watchlist;
}

function renderWatchlist() {
    const watchlist = createMovieArray();
    const renderedMoviesArray = watchlist.map((movieData, index) => {
        return `<tr>
        <th scope="row" class="number">${index + 1}</th>
        <td class="poster"><img src="${movieData.Poster}" width = 200px></td>
        <td class="title">${movieData.Title}</td>
        <td class="year">${movieData.Year}</td>
        <th class="remove"><button id="remove" data-imdbid="${movieData.imdbID}">Remove Movie</button></th>
    </tr>`
    })
    renderedMoviesHTML = renderedMoviesArray.join('');
    const tBody = document.querySelector('tbody');
    tBody.innerHTML = renderedMoviesHTML;
    return watchlist
}
let watchlist = renderWatchlist();
// console.log(watchlist)
const removeBtn = document.querySelector("#remove")
document.addEventListener("click", event => {
    // console.log(watchlistJSON) <---- tester
    // console.log(event.target)
    if (event.target.id == "remove") {
        let movieID = event.target.dataset.imdbid;
        // console.log(watchlist);
        deleteMovie(movieID, watchlist);
        watchlist = renderWatchlist();
    }
    
})

function deleteMovie(imdbid, movieArray){
    for (let i = 0; i < movieArray.length; i++ ){
        // console.log(imdbid)
        // console.log(movieArray)
        if (movieArray[i].imdbID == imdbid){
        movieArray.splice(i, 1);
        // console.log("match");
    }}
    console.log(movieArray)
    const watchlistJSON = JSON.stringify(movieArray)
    localStorage.setItem('watchlist', watchlistJSON)
    
}
