import React, { Component } from "react";
import List from "../List";

export default class pagInstituição extends Component {
  state = {
    inst: "",
    logradouro: "",
    cep: "59078970",
    numero: "",
    complemento: "",
    uf: "",
    localidade: "",
    bairro: "",
    items: []
  };

  handleSubmit = async e => {
    e.preventDefault();
    /*const response = await api.post("", {
      nome: this.state.newNome

    });*/
  };
  componentDidMount() {
    this.searchWithCep();
  }
  /* do back-end
  componentDidMount() {
    fetch('https://api/lists', {
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

    fetch('https://api/items', {
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
      return fetch(`https://api/lists/${listId}`, {
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
      items: [...this.state.items, this.state.inst + ", " + this.state.cep]
      //Inst, Cidade, Estado
    });
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
    this.setState({ cidade: e.target.value });
  };
  handleUfChange =e=>{
    this.setState({uf: e.target.value});
  }
  searchWithCep = () => {
    fetch(`https://viacep.com.br/ws/${this.state.cep}/json`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          logradouro: data.logradouro,
          numero: data.complemento,
          bairro: data.bairro,
          uf: data.uf,
          localidade: data.localidade
        });
      });
  };
  //Rua,cep,numero,complemento
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
              value={this.state.nome}
              onChange={this.handleNomeChange}
            />
          </div>
          <div className="row">
            <div className="form-group col-3">
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
                placeholder="Ex: 66 ou s/n"
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
