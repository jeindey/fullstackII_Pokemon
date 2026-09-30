import { useEffect, useState } from 'react'
import './App.css'
import { Card } from 'react-bootstrap'


// https://pokeapi.co/api/v2/pokemon/pikachu

function App() {
  const [pokemon, setPokemon] = useState(null)

  const buscarPokemon = async () => {

    const response = await fetch (
      'https://pokeapi.co/api/v2/pokemon/pikachu'
    )

    const data = await response.json()

    setPokemon(data)

    console.log(data)

  }

  useEffect(() => {
    buscarPokemon()
  }, [])

  return (
    <div className="container-pokemon">
      {pokemon ? (
        <Card className="pokemon-card">
          <div className="pokemon-header">
            <Card.Title className="pokemon-title">
              {pokemon?.name?.charAt(0).toUpperCase() + pokemon?.name?.slice(1)}
            </Card.Title>
          </div>
          <Card.Img 
            variant="top" 
            src={pokemon?.sprites?.other?.showdown?.front_default}
            className="pokemon-image"
          />
          <Card.Body>
            <hr className="divider" />
            <Card.Text className="pokemon-info">
              <strong>ID:</strong> {pokemon?.id}
            </Card.Text>
            <Card.Text className="pokemon-info">
              <strong>Peso:</strong> {pokemon?.weight} kg
            </Card.Text>
            <Card.Text className="pokemon-info">
              <strong>Altura:</strong> {pokemon?.height} dm
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <p className="loading">Cargando Pokémon...</p>
      )}
    </div>
  )
}

export default App
