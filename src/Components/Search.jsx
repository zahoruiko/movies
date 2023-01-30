import React, { Component } from 'react'

export default class Search extends Component {
    state = {
        search: '',
        type: 'all',
    }

    handleFilter = (event) => {
        this.setState(
            {type: event.target.dataset.type},
            () => this.props.searchMovies(this.state.search, this.state.type)
        );
        this.props.searchMovies(this.state.search, this.state.type)
    }

    handleKey = (event) => {
        if (event.key === 'Enter' && this.state.search.trim()) {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }

    render() {
        return (
            <div className="row">
                <div className="input-field col s12">
                    <input
                        id="search"
                        type="search"
                        className="validate"
                        placeholder="Search"
                        value={this.state.search}
                        onChange={(event) => this.setState({ search: event.target.value })}
                        onKeyDown={this.handleKey}
                        // minLength={3}
                    />

                    <button className='bth btn-search'
                        onClick={() => this.props.searchMovies(this.state.search)}
                        disabled={!this.state.search.trim()}
                    >Search</button>
                </div>
                
                <div>
                    <label>
                        <input 
                            className='with-gap' 
                            name='type' 
                            type='radio' 
                            data-type='all' 
                            onChange={this.handleFilter} 
                            checked={this.state.type === 'all'} 
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input 
                            className='with-gap' 
                            name='type' 
                            type='radio' 
                            data-type='movie' 
                            onChange={this.handleFilter} 
                            checked={this.state.type === 'movie'} 
                        />
                        <span>Movies</span>
                    </label>
                    <label>
                        <input 
                            className='with-gap' 
                            name='type' 
                            type='radio' 
                            data-type='series' 
                            onChange={this.handleFilter} 
                            checked={this.state.type === 'series'} 
                        />
                        <span>Serials</span>
                    </label>
                </div>
            </div>
        )
    }
}