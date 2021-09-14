import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/searchbox/search.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      songs: [],
      
      searchSongs: '',

     
    };



  }

  componentDidMount() {
    fetch('https://songappreactnativetest.herokuapp.com/api/app/')
      .then(response => response.json())
      .then((titles) => this.setState(
        { songs: titles,
           
        
        }))
        


  };
  handleChange =  (e)=>{
    this.setState({ searchSongs: e.target.value })
  }
  


  render() {
    const { songs, searchSongs } = this.state;
    
    
    const filteredSongs = songs.filter(

      song => song.title.toLowerCase().includes(searchSongs.toLowerCase())
      )

      
      

      


    return (
      <div className='App'>

      <h1>Christian Children Songs</h1>
      <p>By</p>
      <p>S.D.A Anna Nagar church Youth</p>
        <SearchBox
          placeholder='Enter song Title'
          
          handleChange={this.handleChange}
        >
        </SearchBox>


        
        <CardList songs={filteredSongs}>

        </CardList>
        



      </div>

    )
  }

}

export default App;
