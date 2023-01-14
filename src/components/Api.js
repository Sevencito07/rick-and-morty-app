import Character from "./Character"
import { useState, useEffect } from "react"
import './main.css'

export default function Api() {
    const [loading, setLoading] = useState(true)
    const [character, setCharacter] = useState([])
    const [page, setPage] = useState(1)
    
   useEffect(()=>{
    async function fetchdata(){
        const data = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        const {results} = await data.json();
        setCharacter(results)
        setLoading(false)
    }
    fetchdata()
   },[page])
 

    return (
    <div className="conten-main">
      <div className="conten-first" >
      <h1>Rick And Morty API</h1>
       <div className="conten-top">
          <h3> page :{page}</h3>
            <button onClick={()=>setPage(page + 1)}>
                next page {page +1}</button>
        </div>
      </div>
        {loading?(
            <div>...loading</div>
        ):(
            <div className="conten-list">
                {character.map((character)=>(
                    <div key={character.id}>
                        <Character 
                         key={character.id}
                         name={character.name}
                         origin={character.origin.name}
                         gender={character.gender}
                         species={character.species}
                         image={character.image}
                            />
                    </div>
                ))}
            </div>
        )}
    </div>
  )
}
