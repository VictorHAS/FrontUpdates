import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class MenuAluno extends Component {
  render() {
    return (
      <div className="container">
        <div
          className="bg-light border list-inline-item rounded "
          id="sidebar-wrapper"
        >
          <div className="list-group list-group-flush">
            <Link
              to="/sistema/administracao"
              className="list-group-item list-group-item-action bg-light"
            >
              Usuários
            </Link>
            <Link
              to="/sistema/administracao"
              className="list-group-item list-group-item-action bg-light"
            >
              Insituições
            </Link>
            <Link
              to="/sistema/administracao"
              className="list-group-item list-group-item-action bg-light"
            >
              Cursos
            </Link>
            <Link
              to="/sistema/administracao"
              className="list-group-item list-group-item-action bg-light"
            >
              Disciplinas
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
