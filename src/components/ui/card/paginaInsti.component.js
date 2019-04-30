import React, { Component } from "react";

export default class Card extends Component {
  state = {
    newNome: "",
    newEndereco: ""
  };

  handleSubmit = async e => {
    e.preventDefault();
    /*const response = await api.post("", {
      nome: this.state.newNome

    });*/
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
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="inputNome">Nome</label>
            <input
              type="text"
              className="form-control"
              id="inputNome"
              placeholder="Nome da Instituição Ex: UFRN"
              value={this.state.newNome}
              onChange={this.handleNameChange}
            />
          </div>
          <div className="form-group">
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
          <button type="submit" className="btn btn-primary">
            Incluir
          </button>
        </form>
      </div>
    );
  }
}
