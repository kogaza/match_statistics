import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="container">
      <div className="row">
              <div className="col-sm-12 text-center">
                <h3>Zestawienie wyników wtorkowego grania</h3>
              </div>
            </div>
        <div className="row">
          <div className="col-sm-10 bg-success">
            
            <div className="row">
              <div className="col-sm-1"></div>
              <div className="col-sm-4 border text-center bg-warning">
              Mateusz
              </div>
              <div className="col-sm-1 border text-center bg-secondary text-light">
              1
              </div>
              <div className="col-sm-1 border text-center bg-secondary text-light">
              3
              </div>
              <div className="col-sm-4 border text-center bg-primary">
              Michał, Paweł, Jacek
              </div>
              <div className="col-sm-1"></div>
            </div>

            <div className="row">
              <div className="col-sm-1"></div>
              <div className="col-sm-4 border text-center bg-light">
              Karol, Janek
              </div>
              <div className="col-sm-1 border text-center bg-secondary text-light">
              2
              </div>
              <div className="col-sm-1 border text-center bg-secondary text-light">
              2
              </div>
              <div className="col-sm-4 border text-center bg-primary">
              Leon, Jacek
              </div>
              <div className="col-sm-1"></div>
            </div>

            <div className="row">
              <div className="col-sm-1"></div>
              <div className="col-sm-4 border text-center bg-light">
              Karol, Piotrek, Karol, Alan
              </div>
              <div className="col-sm-1 border text-center bg-secondary text-light">
              4
              </div>
              <div className="col-sm-1 border text-center bg-secondary text-light">
              3
              </div>
              <div className="col-sm-4 border text-center bg-warning">
              Mateusz, Wojtek, Jan
              </div>
              <div className="col-sm-1"></div>
            </div>


          </div>

          <div className="col-sm-2 ">
            <div className="row">
              <div className="col-sm-12">
                <button type="button" className="my-button btn-info">
                Tabela
                </button>
              </div>
              <div className="col-sm-12">
                <button type="button" className="my-button btn-info">
                Strzelcy
                </button>
              </div>
              <div className="col-sm-12">
                <button type="button" className="my-button btn-info">
                Sala 1
                </button>
              </div>
              <div className="col-sm-12">
                <button type="button" className="my-button btn-info">
                Sala 2
                </button>
              </div>
              <div className="col-sm-12">
                <button type="button" className="my-button btn-info">
                Ustawienia
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
