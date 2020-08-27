import React from 'react';
import Card from './Card';




const CardList = ({robots}) => {
    const cardArray = robots.map((user,index) => {
        return <Card id={robots[index].id} name={robots[index].name} email={robots[index].email}/>
    })
    return (
        <div>
            {/* The various properties in these jsx tags are actually
            properties we are passing to the Card.js components in the
            'props' argument (see: Card.js file for more info)
            we are getting id, name, email from the objects (json) in 
            array 'robots' inside the robots.js file */}
            {cardArray}
            
        </div>
    );
}

export default CardList;