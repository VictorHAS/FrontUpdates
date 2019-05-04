import React, { Component } from "react";
import List from "../List";
export default class pagInstituição extends Component {
  state = {
    newNome: "",
    newEndereco: "",
    items: []
  };

  handleSubmit = async e => {
    e.preventDefault();
    /*const response = await api.post("", {
      nome: this.state.newNome

    });*/
  };
  /* do back-end
  componentDidMount() {
    fetch('https://todo-api-london.now.sh/lists', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        list: {
          name: 'my list'
        }
      })
    })
    .then((res) => res.json())
    .then(( data ) => {
      this.setState({
        listId: data.list.id
      });
    });
  }*/
  /*enviar nova Instituição para o back-end
  onSubmit = (event) => {
    event.preventDefault();
    const { listId, term } = this.state;

    fetch('https://todo-api-london.now.sh/items', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        item: {
          list_id: listId,
          description: term
        }
      })
    })
    .then(() => {
      return fetch(`https://todo-api-london.now.sh/lists/${listId}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        }
      }).then((res) => res.json())
    })
    .then((data) => {
      this.setState({
        items: data.list.items.map(({ description }) => description)
      })
    });
  }*/
  onSubmit = event => {
    event.preventDefault();
    this.setState({
      items: [
        ...this.state.items,
        this.state.newNome + ", " + this.state.newEndereco
      ]
      //Inst, Cidade, Estado
    });
  };
  handleNameChange = e => {
    this.setState({ newNome: e.target.value });
  };
  handleEnderecoChange = e => {
    this.setState({ newEndereco: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group ">
            <label htmlFor="inputNome">Nome</label>
            <input
              type="text"
              className="form-control"
              id="inputNome"
              placeholder="Nome da Instituição Ex: UFRN "
              value={this.state.newNome}
              onChange={this.handleNameChange}
            />
          </div>
          <div className="form-group ">
            <label htmlFor="inputEndereco">Endereço</label>
            <input
              type="text"
              className="form-control"
              id="inputEndereco"
              placeholder="Ex: rua cet, s/n, natal"
              value={this.state.newEndereco}
              onChange={this.handleEnderecoChange}
            />
          </div>
          <button type="submit" className="btn btn-primary mb-3 btn-sm">
            Incluir
          </button>
          <div className="input-group">
            <input
              className="form-control py-2 mt-2 mb-2"
              type="search"
              placeholder="Natal"
            />
            <span className="input-group-append mt-2 mb-2">
              <button className="btn btn-outline-secondary" type="button">
                <i className="fa fa-search" />
              </button>
            </span>
          </div>
          <List items={this.state.items} />
        </form>
      </div>
    );
  }
}
