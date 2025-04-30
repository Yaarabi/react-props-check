

import React from 'react'

const Player = (props) => {
    return (
    <div className='card' >
            <img src={props.img}  alt={'img of ' + props.name}/>
            <div >
                <h5 >{props.name}</h5>
                <h5 >{props.team}</h5>
                <p >{"Here jersey Number: "+ props.num + ' in '+ props.team +', and there age: '+ props.age}</p>
                <p >{props.about}</p>
            </div>
    </div>
)
}

export default Player
