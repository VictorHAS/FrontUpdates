import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="form-group ">
            <label for="inputNome">Nome</label>
            <input
              type="text"
              className="form-control"
              id="inputNome"
              placeholder="Nome da Instituição Ex: UFRN"
            />
          </div>
          <div className="form-group">
            <label for="inputEndereco">Endereço</label>
            <input
              type="text"
              className="form-control"
              id="inputEndereco"
              placeholder="Ex: rua cet, s/n, natal"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
