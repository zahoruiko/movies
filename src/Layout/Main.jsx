import React from "react";
import { MoviesList } from "../Components/MoviesList";
import Search from "../Components/Search";
import { Loader } from "./Loader";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading: false,
    }

    updateData = (value) => {
        this.setState({ movies: value })
    }

    componentDidMount(str) {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=new`)
        // fetch(`https://www.omdbapi.com/?apikey=16643dec&s=new`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search}))
    }

    searchMovies = (str, type = 'all') => {
        // console.log("str", str, "type", type);
        this.setState({loading: true})
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str.trim() ? str : 'hulk'}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search}))
        .then(this.setState({loading: false}))
    }

    render () {
        return (
            <main>
                <div className="container content">
                    <Search searchMovies={this.searchMovies} />
                    {
                        this.state.loading ? 
                        <Loader /> :
                        // this.state.movies?.length ? 
                        <MoviesList movies={this.state.movies} />
                    }
                </div>
            </main>
        );
    }
};

export default Main;