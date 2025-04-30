

import { useEffect, useState} from 'react'

import PlayList from './component/playList'

import './App.css'

function App() {

  let [db, setDb]=useState([])
  useEffect(
    ()=>{
      fetch("/src/dataPlayers.json")
      .then(
        (resp)=>{
          return resp.json()
        }
      )
      .then(
        (resu)=>{
          setDb(resu)
        }
      )
      .catch(
        (err)=>{
          console.log(`wallo ${err}`)
        }
      )
      
    },[]
  )

  return (
    
    <div className='players'>
    <PlayList arr = {db}/>
    </div>
  )
}

export default App
