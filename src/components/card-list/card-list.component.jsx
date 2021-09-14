import React from 'react';

import {Card} from '../card/card.component'
import './card-list.style.css'

export const CardList =(props) =>{
    
    
    return (
<div className="card-list">
{
    props.songs.map(song => (
        

      <Card  key ={song.id} song={song}></Card>
      
      ))
      
    }
</div>

    ); 
}