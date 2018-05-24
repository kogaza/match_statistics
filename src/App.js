import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
  constructor(){
    super();
    this.state = {
      results: [
        ["Mateusz","orange",1,3,"blue","Michał, Paweł, Jacek"],
        ["Karol, Janek","white",2,2,"blue","Leon, Jacek"],
        ["Karol, Piotrek, Karol, Alan","white",4,3,"orange","Mateusz, Wojtek, Jan"],
      ],
      players: [
        {id: 0, name: "Maciek"},
        {id: 1, name: "Jan"}
      ],
      teams: [
        {id: 0, color: "white"},
        {id: 1, color: "orange"},
        {id: 2, color: "blue"}
      ]
    }
  }

  addNewMatch = () => {
    
    console.log(this.state.players[0].name);
  }

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
            <NextRow row={this.state.results} />
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
              <div className="col-sm-12">
                <button type="button" className="my-button btn-info"
                onClick={()=>this.addNewMatch()}>
                Dodaj mecz
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const NextRow = ({row}) => {

    var new_array = row.map((p,i) => {
      return <div key={i} className="row">
        <div className="col-sm-1"></div>
        <div className={`col-sm-4 border text-center ${row[i][1] === "white" ? "bg-light" : (row[i][1] === "blue" ? "bg-primary" : "bg-warning")  }`} >
        {row[i][0]}
        </div>
        <div className="col-sm-1 border text-center bg-secondary text-light">
        {row[i][2]}
        </div>
        <div className="col-sm-1 border text-center bg-secondary text-light">
        {row[i][3]}
        </div>
        <div className={`col-sm-4 border text-center ${row[i][4] === "white" ? "bg-light" : (row[i][4] === "blue" ? "bg-primary" : "bg-warning") }`}>
        {row[i][5]}
        </div>
        <div className="col-sm-1"></div> 
      </div>
      
    })
  return new_array;
  
};

export default App;
