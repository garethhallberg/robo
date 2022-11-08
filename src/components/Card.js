import React from "react";
import 'tachyons'

function Card({id, name, username}) {
    return (
      <div className="bg-light-green dib br3 pa3 ma2 grow bw2shadow-15" >
        <img alt='robots' src={`https://robohash.org/${username}?200x200`} />
        <h1 className='f4'>{name}</h1>
        <p>Welcome to the home of truth user with id of {id}</p>
      </div>
    );
  }


  export default Card;