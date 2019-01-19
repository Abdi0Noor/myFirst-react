import React from 'react';
import '../../App.css'
const List = props => (
    

    <ul className="list">
    
    {props.items.map((item, index) => 
    <li key={index}>
    <div className="cards">{item}</div>
    
    </li>)}    
    </ul>

    
   
)

export default List;





   
