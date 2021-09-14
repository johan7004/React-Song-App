import React from 'react';
import './card.style.css'

export const Card = (props) => (




<div className="card-container">
<p>{props.song.title}</p>

<button key={props.song.id} onClick={()=> console.log(props.song.lyrics)} >Lyrics</button>

</div>

)