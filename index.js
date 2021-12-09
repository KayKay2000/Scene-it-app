// To create buttons
// function renderMovies(movies) {
//     const movieHtmlArray = movies.map(function (currentMovie, index) {
//         return ` <button class="btn btn-primary" 
//         type="button" 
//         data-bs-toggle="collapse" 
//         data-bs-target="#multiCollapseExample${index}" 
//         aria-expanded="false" 
//         aria-controls="multiCollapseExample2" 
//         id="showBtn" >
//         ${currentMovie.Title}
//         </button>`})
//     const buttons = document.querySelector(".buttons")
//     // to keep button present on page all the time 
//     movieHtmlArray.push(`<button class="btn btn-primary" 
//     type="button" data-bs-toggle="collapse" 
//     data-bs-target=".multi-collapse" 
//     aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2" 
//     id="showBtn" >All Movies</button>`)
//     buttons.innerHTML = movieHtmlArray.join(' ')
// }


// To create movie cards
// function renderMovies2(movies) {
//     const movieHtmlArray = movies.map(function (currentMovie, index) {
//         return ` <div class="col">
//         <div class="collapse multi-collapse" id="multiCollapseExample${index}">
//         <div class="card card-body">
//             <div class="movie-image"><img src= ${currentMovie.Poster} height=400px /></div>
//             <label class="movie-label">${currentMovie.Title}</label>
//             <div class="date">${currentMovie.Year}</div>
//             <button class="addBtn" type="submit" id="searchAdd">Add</button>
//         </div>
//         </div>
//     </div>`
//     })
    
//     const row = document.querySelector(".mt-5")
//     row.innerHTML += movieHtmlArray.join("")

// }
document.addEventListener('DOMContentLoaded', function () {
    // code here will execute after the document is loaded 
    renderMovies(movieData);
    renderMovies2(movieData)
});
// to search
const search = document.querySelector("#search-form")
const input = document.querySelector(".search-bar")
search.addEventListener("submit", event => {
    e.preventDefault();
    if (input.innerHTML = currentMovie.Title){
    console.log("Hello")}
    else {
    console.log("Goodbye")
    }})
    




    // function renderMovies(movies) {
    //     const movieHtmlArray = movies.map(function (currentMovie, index) {
    //         return ` <button class="btn btn-primary" 
    //         type="button" 
    //         data-bs-toggle="collapse" 
    //         data-bs-target="#multiCollapseExample${index}" 
    //         aria-expanded="false" 
    //         aria-controls="multiCollapseExample2" 
    //         id="showBtn" >
    //         ${currentMovie.Title}
    //         </button>`})
    //     const buttons = document.querySelector(".buttons")
    //     movieHtmlArray.push(`<button class="btn btn-primary" 
    //     type="button" data-bs-toggle="collapse" 
    //     data-bs-target=".multi-collapse" 
    //     aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2" 
    //     id="showBtn" >All Movies</button>`)
    //     buttons.innerHTML = movieHtmlArray.join(' ')
    // }



    // function renderMovies2(movies) {
    //     const movieHtmlArray = movies.map(function (currentMovie, index) {
    //         return ` <div class="col">
    //         <div class="collapse multi-collapse" id="multiCollapseExample${index}">
    //         <div class="card card-body">
    //             <div class="movie-image"><img src= ${currentMovie.Poster} height=400px/></div>
    //             <label class="movie-label">${currentMovie.Title}</label>
    //             <div class="date">${currentMovie.Year}</div>
    //             <button class="addBtn" type="submit" id="searchAdd">Add</button>
    //         </div>
    //         </div>
    //     </div>`
    //     })
    //     // const lower = document.querySelector("#lower-div")
    //     const row = document.querySelector(".mt-5")
    //     // const results = document.querySelector("#buttons")
    //     // lower.innerHTML += movieHtmlArray.join(' ')
    //     row.innerHTML += movieHtmlArray.join("")

    // }


    // }))
