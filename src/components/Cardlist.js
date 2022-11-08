import React from "react";
import Card from "./Card";



const Cardlist = ({ robots }) => {
    if(true) {
        throw new Error('Noooooooooo!');
    }
    
    return (
        <div>
            {
                robots.map((user, i) => {
                    return <Card 
                    key={robots[i].id} 
                    id={robots[i].id} 
                    name={robots[i].name} 
                    username={robots.at(i).username} 
                    />
                })
            }
        </div>
    );
}

export default Cardlist;