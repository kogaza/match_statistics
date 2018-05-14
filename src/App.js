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
              Michał, Paweł, Jacek, Stanisław
              </div>
            </div>

            <div className="row">
              <div className="col-sm-4 border text-center bg-light">
              Mateusz
              </div>
              <div className="col-sm-1 border text-center bg-secondary text-light">
              1
              </div>
              <div className="col-sm-1 border text-center bg-secondary text-light">
              3
              </div>
              <div className="col-sm-4 border text-center bg-primary">
              Michał, Paweł, Jacek, Stanisław
              </div>
            </div>


          </div>

          <div className="col-sm-2 border">
          Sala
          </div>
        </div>
      </div>
    );
  }
}

export default App;
