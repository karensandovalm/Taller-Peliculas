import axios from "axios"

const BASE_URL = "https://api.themoviedb.org/3/"
const BASE_IMG = "https://image.tmdb.org/t/p/w500/"
const APIKEY = "492d218f089fd8c20e9c3a945b482a9f"
const LANGUAGE = "es-CO"

function formatReleaseDate(original_date:String) {
    let months = [
        {id:1, name: "enero"},
        {id:2, name: "febrero"},
        {id:3, name: "marzo"},
        {id:4, name: "abril"},
        {id:5, name: "mayo"},
        {id:6, name: "junio"},
        {id:7, name: "julio"},
        {id:8, name: "agosto"},
        {id:9, name: "septiembre"},
        {id:10, name: "octubre"},
        {id:11, name: "noviembre"},
        {id:12, name: "diciembre"},
    ]
    let array_date = original_date.split("-");
    let year = array_date[0]
    let month_id = array_date[1]
    let month = months.find(element => {return element.id == month_id})
    let day = array_date[2]
    if(month){
        return `${day} de ${month.name} de ${year}`
    }
}

export default {

    async getGenrers() {
        return await axios.get(`${BASE_URL}genre/movie/list?api_key=${APIKEY}&language=${LANGUAGE}`)
        .then(response => {
            return response.data.genres
        })
        .catch(error => {
            console.log(error)
        })
    },
    async getMoviesFilteredByGenre(genrer_id:any,page:any) {
        return await axios.get(`${BASE_URL}discover/movie?api_key=${APIKEY}&language=${LANGUAGE}&with_genres=${genrer_id}&page=${page}`)
        .then(response => {
            let movies = response.data.results
            for(let i = 0; i < movies.length; i++){
                movies[i].release_date = formatReleaseDate(movies[i].release_date)
            }
            return movies
        })
        .catch(error => {
            console.log(error)
        })
    },
    async getMoviesFilteredByCategory(category:any,page:any){
        return await axios.get(`${BASE_URL}movie/${category}?api_key=${APIKEY}&language=${LANGUAGE}&page=${page}`)
        .then(response => {
            let movies = response.data.results
            for(let i = 0; i < movies.length; i++){
                movies[i].release_date = formatReleaseDate(movies[i].release_date)
            }
            return movies
        })
        .catch(error => {
            console.log(error)
        })
    },
    async getMovieDetail(id:any) {
        return await axios.get(`${BASE_URL}movie/${id}?api_key=${APIKEY}&language=${LANGUAGE}`)
        .then(response => {
            let movie = response.data
            movie.release_date = formatReleaseDate(movie.release_date)
            return movie
        })
        .catch(error => {
            console.log(error)
        })
    },
    async getMovieTrailer(id:any) {
        return await axios.get(`${BASE_URL}movie/${id}/videos?api_key=${APIKEY}&language=${LANGUAGE}`)
        .then(response => {
            return response.data.results
        })
        .catch(error => {
            console.log(error)
        })
    },

    baseImgUrl : () => {
        return BASE_IMG
    }
}