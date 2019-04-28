import React, { Component } from "react";

import AdministracaoTemplate from "components/templates/administracao.template";

import Insti from "components/ui/card/paginaInsti.component";

export default class HomeAdministradorScreen extends Component {
  componentDidMount() {
    document.title = "Sistema Administracao - Plataforma LOP";
  }

  render() {
    return (
      <AdministracaoTemplate>
        <Insti />
      </AdministracaoTemplate>
    );
  }
}
