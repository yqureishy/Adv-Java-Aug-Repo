import React, { useState, useEffect } from 'react'


function MovieList(prop) {

    const [movies, setMovies] = useState([])




    useEffect(() => {
        getAllMovies()
    }, [])

    const getAllMovies = () => {
        fetch('http://www.omdbapi.com/?s=Batman&page=2&apikey=564727fa')
            .then(response => (response.json()))
            .then(result => {
                console.log(result)
                setMovies(result.Search)
            })
    }


    const allMovies = movies.map(movie => {
        return <li key={movie.imdbID}>{movie.Title}</li>
    })

    const handleGetAllMovies = () => {
        getAllMovies()
    }



    return (
        <div>
            <h1>Movie List</h1>
            <button onClick={handleGetAllMovies}>Show movies!</button>
            <h5>{allMovies}</h5>
        </div>
    )



}

export default MovieList