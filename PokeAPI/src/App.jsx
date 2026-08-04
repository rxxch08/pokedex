import './App.css'
import { useState, useEffect } from 'react'
import PokemonCard from './PokemonCard'

function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
    .then(res => res.json())
    .then(data => {
      const formatted = data.results.map((pokemon) => {
        const parts = pokemon.url.split('/')
        const id = parts[parts.length - 2]
        return {
          id,
          name: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        }
      })
      setPokemons(formatted)
    })
}, [])

  return (
    <div className="app">
      <header>
        <h1>Pokédex</h1>
        <p>by "Roach Killjoy"</p>
        <p>{pokemons.length} pokémons chargés</p>
      </header>
    </div>
  )
}

export default App