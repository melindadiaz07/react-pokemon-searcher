import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchInput:"",
    newPokemon: {}
  }


  handleSearch = (event) => {

    this.setState({
      searchInput: event.target.value
    })
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(pokeData => {
      this.setState({
        pokemons: pokeData
      })
    })
  }

  createNewPoke = (pokeObject) => {
      fetch("http://localhost:3000/pokemon", {
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(pokeObject)
      })
      .then(res => res.json())
      .then(poke => {
        this.setState({
          pokemons: [...this.state.pokemons, poke]
        })
      })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm  sendToForm={this.createNewPoke} />
        <br />
        <Search searchInfo={this.handleSearch} />
        <br />
        <PokemonCollection pokemons={this.state.pokemons} searchInput={this.state.searchInput} />
      </Container>
    )
  }
}

export default PokemonPage
