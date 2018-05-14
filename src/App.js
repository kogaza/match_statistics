import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-10 bg-success">

            <div className="row">
              <div className="col-sm-5 border text-center bg-warning">
              Mateusz
              </div>
              <div className="col-sm-1 border text-center bg-secondary text-light">
              1
              </div>
              <div className="col-sm-1 border text-center bg-secondary text-light">
              3
              </div>
              <div className="col-sm-5 border text-center bg-primary">
              Michał, Paweł, Jacek
              </div>
            </div>

            <div className="row">
              <div className="col-sm-5 border text-center bg-light">
              Karol, Janek
              </div>
              <div className="col-sm-1 border text-center bg-secondary text-light">
              2
              </div>
              <div className="col-sm-1 border text-center bg-secondary text-light">
              2
              </div>
              <div className="col-sm-5 border text-center bg-primary">
              Leon, Jacek
              </div>
            </div>


          </div>

          <div className="col-sm-2 border">
            <div className="row">
              <div className="col-sm-12 border">
                <button type="button" className="btn btn-info">
                Tabela
                </button>
              </div>
              <div className="col-sm-12 border">
                <button type="button" className="btn btn-info">
                Strzelcy
                </button>
              </div>
              <div className="col-sm-12 border">
                <button type="button" className="btn btn-info">
                Sala 1
                </button>
              </div>
              <div className="col-sm-12 border">
                <button type="button" className="btn btn-info">
                Sala 2
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
