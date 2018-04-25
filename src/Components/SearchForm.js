import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class SearchForm extends Component {

    static propTypes = {
        onSearch: PropTypes.func.isRequired
    };

    state = {
        searchText: ''
    };

    onSearchChange = e => {
        this.setState({searchText: e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.query.value);
        e.currentTarget.reset(); //reset search filed
    };

    render() {
        return (
            <form className="search-form" onSubmit={this.handleSubmit}>
                <label className="is-hidden" htmlFor="search">Search</label>
                <input type="search"
                       onChange={this.onSearchChange}
                       name="search"
                       ref={(input) => this.query = input}
                       placeholder="Search..."/>
                <button type="submit" id="submit" className="search-button"><i
                    className="material-icons icn-search">search</i></button>
            </form>
        );
    }
}