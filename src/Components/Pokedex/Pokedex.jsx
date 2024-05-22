


import PokemonList from "../PokemonList/PokemonList"
import Search from "../Search/search"
import "./Pokedex.css"

function Pokedex()
{
    return(
        <div className="pokedex-wrapper">
        <h1 className="heading-poke">Pokedex</h1> 
        <Search/>
       <PokemonList/>
        </div>
    )
}

export default Pokedex