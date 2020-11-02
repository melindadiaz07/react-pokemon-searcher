import React from 'react'
import { Card } from 'semantic-ui-react'



class PokemonCard extends React.Component {

  
  state = {
    pokeImage: this.props.pokeData.sprites.front
  }

  flipCard = () => {
    (this.state.pokeImage === this.props.pokeData.sprites.front) ?
    this.setState({
      pokeImage: this.props.pokeData.sprites.back
    }) :
    this.setState({
      pokeImage: this.props.pokeData.sprites.front
    })
  }

  
  render() {
    const {id, name, hp, sprites} = this.props.pokeData
    return (
      <Card onClick={() => this.flipCard()} >
        <div>
          <div className="image">
            <img src={ this.state.pokeImage } alt="oh no!" />
          </div>
          <div className="content">
    <div className="header">{ this.props.pokeData.name }</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              { hp }
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
