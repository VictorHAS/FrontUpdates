import React, { Component } from "react";
import List from "../List";
import Swal from "sweetalert2";
export default class pagInstituição extends Component {
  state = {
    nome: "",
    logradouro: "",
    cep: "59078970",
    numero: "",
    complemento: "",
    uf: "",
    localidade: "",
    bairro: "",
    msg: "",
    items: []
  };

  handleSubmit = async e => {
    e.preventDefault();
  };
  componentDidMount() {
    this.searchWithCep();
  }
  /*
  getInstituicoes(e) {
    e.preventDefault();
  }*/
  onSubmit = event => {
    event.preventDefault();
    if (this.state.nome.length > 0) {
      Swal.fire({
        type: "success",
        title: `Instituição cadastrada`,
        confirmButtonText: "Voltar para o sistema"
      });
      /*const requestInfo = {
      method: "POST",
      body: JSON.stringify({
        nome: this.state.nome,
        localidade: this.state.localidade,
        uf: this.state.uf
      }),
      headers: new Headers({
        "Content-type": "application/json"
      })
    };*/
      this.setState({
        items: [
          ...this.state.items,
          this.state.nome + ", " + this.state.localidade + ", " + this.state.uf
        ]
        //Inst, Cidade, Estado
      });
    }else{
      Swal.fire({
        type: "error",
        title: `Campo instituição vazio`,
        confirmButtonText: "Voltar para o sistema"
      });
    }
  };
  handleNameChange = e => {
    this.setState({ nome: e.target.value });
  };
  handleCepChange = e => {
    this.setState({ cep: e.target.value });
  };
  handleLogradouroChange = e => {
    this.setState({ logradouro: e.target.value });
  };
  handleBairroChange = e => {
    this.setState({ bairro: e.target.value });
  };
  handleNumeroChange = e => {
    this.setState({ numero: e.target.value });
  };
  handleComplementoChange = e => {
    this.setState({ complemento: e.target.value });
  };
  handleCidadeChange = e => {
    this.setState({ cidade: e.target.value });
  };
  handleLocalidadeChange = e => {
    this.setState({ localidade: e.target.value });
  };
  handleUfChange = e => {
    this.setState({ uf: e.target.value });
  };
  searchWithCep = () => {
    if (this.state.cep.length !== 8) {
      Swal.fire({
        type: "error",
        title: `Error no cep: ${this.state.cep}`,
        text: "CEP tem quer ter 8 digitos EX:12345-678",
        confirmButtonText: "Voltar para o sistema"
      });
      return;
    }
    fetch(`https://viacep.com.br/ws/${this.state.cep}/json`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        if (data.erro === true) {
          Swal.fire({
            type: "error",
            title: `Error no cep: ${this.state.cep}`,
            text: "CEP não encontrado",
            confirmButtonText: "Voltar para o sistema"
          });
          return;
        }
        this.setState({
          logradouro: data.logradouro,
          numero: data.complemento,
          bairro: data.bairro,
          uf: data.uf,
          localidade: data.localidade
        });
      })
      .catch(e => console.log(e));
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="inputNome">Nome</label>
            <input
              type="text"
              className="form-control"
              id="inputNome"
              placeholder="Nome da Instituição Ex: UFRN "
              value={this.state.nome}
              onChange={this.handleNameChange}
            />
          </div>
          <div className="row">
            <div className="form-group col-5">
              <label htmlFor="inputEndereco">CEP</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="inputEndereco"
                  placeholder="Ex: 59078-970"
                  value={this.state.cep}
                  onChange={this.handleCepChange}
                />
                <span className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={this.searchWithCep}
                  >
                    <i className="fa fa-search" />
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-5">
              <label htmlFor="inputEndereco">Logradouro</label>
              <input
                type="text"
                className="form-control"
                id="inputEndereco"
                placeholder="Ex: Av Senador Salgado Filho"
                value={this.state.logradouro}
                onChange={this.handleLogradouroChange}
              />
            </div>
            <div className="form-group col-2">
              <label htmlFor="inputEndereco">Numero</label>
              <input
                type="text"
                className="form-control"
                id="inputEndereco"
                placeholder="Ex: 3000 ou s/n"
                value={this.state.numero}
                onChange={this.handleNumeroChange}
              />
            </div>
            <div className="form-group col-5">
              <label htmlFor="inputEndereco">Complemento</label>
              <input
                type="text"
                className="form-control"
                id="inputEndereco"
                placeholder=""
                value={this.state.complemento}
                onChange={this.handleComplementoChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-5">
              <label htmlFor="inputEndereco">Bairro</label>
              <input
                type="text"
                className="form-control"
                id="inputEndereco"
                placeholder="Ex: Lagoa Nova"
                value={this.state.bairro}
                onChange={this.handleBairroChange}
              />
            </div>
            <div className="form-group col-5">
              <label htmlFor="inputEndereco">Cidade</label>
              <input
                type="text"
                className="form-control"
                id="inputEndereco"
                placeholder="Ex: Natal"
                value={this.state.localidade}
                onChange={this.handleLocalidadeChange}
              />
            </div>
            <div className="form-group col-2">
              <label htmlFor="inputEndereco">Estado</label>
              <input
                type="text"
                className="form-control"
                id="inputEndereco"
                placeholder="Ex: RN"
                value={this.state.uf}
                onChange={this.handleUfChange}
              />
            </div>
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
