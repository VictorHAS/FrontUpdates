import React, { Component } from "react";
import TemplateAutenticacao from "components/templates/autenticacao.template";

import { Link, Redirect } from "react-router-dom";
export default class LoginScreen extends Component {
  state = {
    redirect: false,
    msg: ""
  };
  login(event) {
    event.preventDefault();
    const requestInfo = {
      method: "POST",
      body: JSON.stringify({
        email: this.login_email.value,
        password: this.login_password.value,
        redirect: false
      }),
      headers: new Headers({
        "Content-type": "application/json"
      })
    };
    fetch("http://localhost:3002/auth", requestInfo)
      .then(response => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error("Invalid email or password");
        }
      })
      .then(token => {
        localStorage.setItem("auth-token", token);
        this.setState({ redirect: true });
      })
      .catch(err => {
        this.setState({ msg: "Erro: usuário ou senha inválidos." });
        localStorage.removeItem("auth-token");
      });
  }
  register(event) {
    event.preventDefault();
    var name = this.register_name.value;
    var enrollment = this.register_enrollment.value;
    var email = this.register_email.value;
    var password = this.register_password.value;
    var confirm_password = this.register_confirmpassword.value;

    var regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (name === "") {
      this.setState({ msg: "Informe seu nome completo" });
    } else if (enrollment === "") {
      this.setState({ msg: "Informe sua matrícula" });
    } else if (email === "" || !regex.test(email)) {
      this.setState({ msg: "Informe um endereço de email válido" });
    } else if (password === "") {
      this.setState({ msg: "Informe uma senha" });
    } else if (confirm_password === "") {
      this.setState({ msg: "Informe uma confirmação de senha" });
    } else if (password !== confirm_password) {
      this.setState({ msg: "A senha e confirmação de senha não correspondem" });
    } else {
      const requestInfo = {
        method: "POST",
        body: JSON.stringify({
          name: name,
          enrollment: enrollment,
          email: email,
          password: password
        }),
        headers: new Headers({
          "Content-type": "application/json"
        })
      };

      fetch("http://localhost:3001/auth", requestInfo)
        .then(response => {
          if (response.ok) {
            return response.text();
          } else {
            throw new Error("Failed to register");
          }
        })
        .then(msg => {
          this.registerform.reset();
          this.setState({
            msg: ""
          });
        })
        .catch(err => {
          this.setState({ msg: "Erro: matrícula ou email indisponível" });
        });
    }
  }
  componentDidMount() {
    document.title = "Realizar login - Plataforma LOP";
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/sistema/aluno" />;
    }
    return (
      <TemplateAutenticacao>
        <form className="card">
          <div className="card-body p-6">
            <div style={{ textAlign: "center" }}>
              <img
                className="h-9"
                alt="Logo sistema"
                src="/assets/images/logo.png"
              />
            </div>
            <div className="card-title">Faça login na sua conta</div>
            <div className="form-group">
              <label className="form-label">Endereço de e-mail</label>
              <input
                type="email"
                className="form-control"
                placeholder="Digite seu e-mail"
              />
            </div>
            <div className="form-group">
              <label className="form-label">
                Senha
                <Link
                  to="/autenticacao/recuperar-senha"
                  className="float-right small"
                >
                  Esqueci a senha
                </Link>
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="**********"
              />
            </div>
            <div className="form-group">
              <label className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <span className="custom-control-label">Lembrar-me</span>
              </label>
            </div>
            <div className="form-footer">
              <button type="submit" className="btn btn-primary btn-block">
                Entrar
              </button>
            </div>
          </div>
        </form>
        <div className="text-center text-muted">
          Não tem conta? <Link to="/autenticacao/cadastro"> cadastre-se</Link>
        </div>
        <br />
      </TemplateAutenticacao>
    );
  }
}
