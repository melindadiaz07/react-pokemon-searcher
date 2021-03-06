import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (
          <Card.Group itemsPerRow={6}>
        
        {
          this.props.pokemons.filter(pokemon => pokemon.name.includes(this.props.searchInput)
          ).map(pokemon => {
          return <PokemonCard pokeData={pokemon} key={pokemon.id}/>
          })
        }
      </Card.Group>
    )
  }
}

export default PokemonCollection
