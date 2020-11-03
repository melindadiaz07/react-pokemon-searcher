import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state = {
    name: "",
    hp: "",
    sprites: {
      front: "",
      back: ""
    }
  }

  handleInput = (event) => {
    if (event.target.name == 'sprites.front') {
      this.setState({
        sprites: {
          front: event.target.value,
          back: this.state.sprites.back
        }
      })
    } else if (event.target.name == 'sprites.back'){
      this.setState({
        sprites: {
          front: this.state.sprites.front,
          back: event.target.value
        }
      })
    } else {
      this.setState({[event.target.name]: event.target.value})
    }
  }

  handleSubmit = () => {
    this.props.sendToForm(this.state)
   }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={event => this.handleSubmit(event)}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name"  onChange={this.handleInput} value={this.state.name}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleInput} value={this.state.hp}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="sprites.front" onChange={this.handleInput} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="sprites.back" onChange={this.handleInput} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
