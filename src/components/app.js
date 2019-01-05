import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './search_bar'


class App extends Component {

    state = {
        images: [],
    }

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term},
           
       })
        // console.log('response:', response.data.results);

        this.setState({images: response.data.results})
   }
   
   
    render(){
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length} images
            </div>
        )
    }
}
export default App;