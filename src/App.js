import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import { getMatchesByDay } from './selectors/getMatchesByDay';

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [
        { id: 0, name: "Maciek" },
        { id: 1, name: "Jan" },
        { id: 2, name: "Piotrek" },
        { id: 3, name: "Jacek" },
        { id: 4, name: "Mateusz" },
        { id: 5, name: "Michał" },
        { id: 6, name: "Paweł" },
        { id: 7, name: "Karol" },
        { id: 8, name: "Janek" },
        { id: 9, name: "Leon" },
        { id: 10, name: "Alan" },
        { id: 11, name: "Wojtek" }
      ],
      teams: [
        { id: 0, color: "white" },
        { id: 1, color: "orange" },
        { id: 2, color: "blue" }
      ],
      days: [
        { id: 1 },
        { id: 2 }
      ],
      goals: [
        { id: 0, matchId: 1, playerId: 4, teamId: 1 },
        { id: 1, matchId: 1, playerId: 5, teamId: 2 },
        { id: 2, matchId: 1, playerId: 6, teamId: 2 },
        { id: 3, matchId: 1, playerId: 3, teamId: 2 },
        { id: 4, matchId: 2, playerId: 7, teamId: 0 },
        { id: 5, matchId: 2, playerId: 8, teamId: 0 },
        { id: 6, matchId: 2, playerId: 9, teamId: 2 },
        { id: 7, matchId: 2, playerId: 3, teamId: 2 },
        { id: 8, matchId: 3, playerId: 7, teamId: 0 },
        { id: 9, matchId: 3, playerId: 2, teamId: 0 },
        { id: 10, matchId: 3, playerId: 7, teamId: 0 },
        { id: 11, matchId: 3, playerId: 10, teamId: 0 },
        { id: 12, matchId: 3, playerId: 4, teamId: 1 },
        { id: 13, matchId: 3, playerId: 11, teamId: 1 },
        { id: 14, matchId: 3, playerId: 1, teamId: 1 },
      ],
      matches: [
        { id: 1, dayId: 1 },
        { id: 2, dayId: 1 },
        { id: 3, dayId: 1 }

      ]
    }
  }

  addNewMatch = () => {
    if (this.state.goals[2].matchNumber === 1) {
      console.log(this.state.goals[0].player);

    }
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
            <NextRow days={this.state.days} state={this.state} />
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
                  onClick={() => this.addNewMatch()}>
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

const NextRow = ({ days, state }) => {

  let matches = getMatchesByDay(days[0].id, state);
  
  var new_array = matches.map((p, i) => {

    
    return <div key={i} className="row">
      <div className="col-sm-1"></div>
      <div className={`col-sm-4 border text-center bg-warning`} >
        {p.goalscorers_1.join(', ')}
      </div>
      <div className="col-sm-1 border text-center bg-secondary text-light">
        {p.goals[0]}
      </div>
      <div className="col-sm-1 border text-center bg-secondary text-light">
        {p.goals[1]}
      </div>
      <div className={`col-sm-4 border text-center bg-primary }`}>
        {p.goalscorers_2.join(', ')}
      </div>
      <div className="col-sm-1"></div>
    </div>

  })
  return new_array;

};

export default App;
