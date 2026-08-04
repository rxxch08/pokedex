function PokemonCard({ name, id, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <p className="number">#{id}</p>
      <p className="name">{name}</p>
    </div>
  )
}

export default PokemonCard