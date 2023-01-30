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

    // translit = (str) =>
    // {
    //     const ru=("А-а-Б-б-В-в-Ґ-ґ-Г-г-Д-д-Е-е-Ё-ё-Є-є-Ж-ж-З-з-И-и-І-і-Ї-ї-Й-й-К-к-Л-л-М-м-Н-н-О-о-П-п-Р-р-С-с-Т-т-У-у-Ф-ф-Х-х-Ц-ц-Ч-ч-Ш-ш-Щ-щ-Ъ-ъ-Ы-ы-Ь-ь-Э-э-Ю-ю-Я-я").split("-")
    //     const en=("A-a-B-b-V-v-G-g-G-g-D-d-E-e-E-e-E-e-ZH-zh-Z-z-I-i-I-i-I-i-J-j-K-k-L-l-M-m-N-n-O-o-P-p-R-r-S-s-T-t-U-u-F-f-H-h-TS-ts-CH-ch-SH-sh-SCH-sch-'-'-Y-y-'-'-E-e-YU-yu-YA-ya").split("-")
    //     let res = '';
    //     for(let i=0, l=str.length; i<l; i++)
    //     {
    //         let s = str.charAt(i), n = ru.indexOf(s);
    //         if(n >= 0) { res += en[n]; }
    //         else { res += s; }
    //     }
    //     return res;
    // }
    // handleKey = (event) => {
    //     const searchValue = this.translit(this.state.search)
    //     if (event.key === 'Enter' && this.state.search.trim()) {
    //         this.props.searchMovies(searchValue, this.state.type)
    //     }
    // }
}