import { React } from 'react';
import './card.styles.css';

export const Card = props => {
    let href = `mailto:${props.monster.email}` ;
    return <div className='card-container'>
        <img alt="{props.monster.name}" 
             src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
        <h2>{props.monster.name}</h2>
        <p><a href={href}>{props.monster.email}</a></p>
        
    </div>;
}




