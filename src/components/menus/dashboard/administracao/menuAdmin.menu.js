import React, { Component } from "react";

import { Link } from "react-router-dom";
/*<div className="container">
        <div className="d-flex align-items-baseline ">
          <div className="bg-light list-inline-item " id="sidebar-wrapper">
            <div className="list-group list-group-flush flex-shrink-1 border rounded">
              <Link
                to="/sistema/administracao"
                className="list-group-item list-group-item-action bg-light"
              >
                Usuários
              </Link>
              <Link
                to="/sistema/administracao/instituicao"
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
          <div className="align-self-center border rounded">
            {this.props.children}
          </div>
        </div>
      </div>*/
export default class MenuAluno extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-2 ">
          <div
            className="nav flex-column nav-pills "
            aria-orientation="vertical"
          >
            <Link
              to="/sistema/administracao/instituicao"
              className="nav-link list-group-item list-group-item-action py-2"
              data-toggle="pill"
              aria-selected="false"
            >
              Usuários
            </Link>
            <Link
              to="/sistema/administracao/instituicao"
              className="nav-link list-group-item list-group-item-action py-2"
              data-toggle="pill"
              aria-selected="false"
            >
              Instituições
            </Link>
            <Link
              to="/sistema/administracao/instituicao"
              className="nav-link list-group-item list-group-item-action py-2"
              data-toggle="pill"
              aria-selected="false"
            >
              Cursos
            </Link>
            <Link
              to="/sistema/administracao/instituicao"
              className="nav-link list-group-item list-group-item-action py-2"
              data-toggle="pill"
              aria-selected="false"
            >
              Disciplinas
            </Link>
          </div>
        </div>
        <div className="col-9">{this.props.children}</div>
      </div>
    );
  }
}
