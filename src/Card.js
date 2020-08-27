// need React import in order to write jsx
// the apparent html tags aren't really html
// they are jsx
import React from 'react';

const Card = (props) => {
  // the constants are pulled from the 'props' argument (see above)
  // The Card arrow function is called from index.js and certain properties
  // are passed in from there.
  const {name, email,id} = props;
  console.log(props);
  return (
    // The styling classes are coming from the css file in package "tachyons"
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
      <div>
        <h2>
          {name}
        </h2>
        <p>
          {email}
        </p>
      </div>
    </div>
  )
} 

export default Card;
