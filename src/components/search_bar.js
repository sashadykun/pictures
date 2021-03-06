import React, {Component} from 'react';


class SearchBar extends Component {

    
    state = {
        term: ''
    }

    onFormSubmit = (event) =>  {
        event.preventDefault();

        this.props.onSearchSubmit(this.state.term);
    }

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label ></label>
                        <input type="text" placeholder="Search" value={this.state.term} onChange={(event) => this.setState({term: event.target.value })}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;