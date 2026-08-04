import './App.css'

function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then(res => res.json())
      .then(data => {
        console.log(data.results)
        setPokemons(data.results)
      })
  }, [])
   
  return (
    <div className="app">
      <header>
        <h1>Pokédex</h1>
        <p>by "Roach Killjoy"</p>
      </header>
    </div>
  )
}

export default App