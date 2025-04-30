

import Player from "./player"

const PlayList = ({arr}) => {
    return (
        <>{
            arr.map(
                (ele)=>(
            <Player name = {ele.name} img = {ele.image} about = {ele.description} age ={ele.age} team ={ele.team}  num= {ele.jerseyNumber}/>
                )
            )
        }
        </>
    )
}


export default PlayList
