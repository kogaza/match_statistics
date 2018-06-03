import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

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
            <NextRow goals={this.state.goals} />
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

const NextRow = ({ goals }) => {

  let matchNr = 2;
  let newMatchNumber = matchNr;
  let colorTeam1 = "";
  let numerID_1 = 0;
  let numerID_2 = -1;

  var new_array = goals.map((p, i) => {

    // let theSameMatch = [];
    let matchNumber = goals[i].matchNumber;
    if (matchNumber === matchNr && numerID_2 < numerID_1) {
      numerID_1 = goals[i].id;
      console.log("N---ID: " + numerID_1);
      numerID_2++;

    }
    colorTeam1 = goals[i].team;
    // console.log("MN: "+matchNumber);
    // console.log("CT: "+colorTeam1);
    if (newMatchNumber === matchNumber) {
      // console.log("MN2: "+matchNumber);
      // console.log("CT2: "+colorTeam1);
      // theSameMatch.push(goals[i-1].team);
      // console.log("TSM: "+theSameMatch);
      ;      // let colorTeam2 = goals[i-1].team;
      // if(colorTeam1 !== colorTeam2){
      //   colorTeam1 = colorTeam2;
      // }
      // console.log("to jest ten sam mecz, kolorT1: "+ colorTeam1 + "kolorT2: " + colorTeam2);
      return;
    } else {
      // console.log("NMN-1= "+newMatchNumber);
      newMatchNumber = matchNumber;
      // console.log("NMN-2= "+newMatchNumber);
    }

    let thisMatchOrange = [];
    let goalsOrange = 0;


    for (let j = 0; j < goals.length; j++) {
      if (goals[j].matchNumber === i && goals[j].team === "orange") {
        thisMatchOrange.push(goals[j].player);
        goalsOrange++;
      }
    }

    let thisMatchBlue = [];
    let goalsBlue = 0
    for (let j = 0; j < goals.length; j++) {
      if (goals[j].matchNumber === i && goals[j].team === "blue") {
        thisMatchBlue.push(goals[j].player);
        goalsBlue++;
      }
    }
    // console.log("Orange: " + thisMatchOrange + ", scores: " + goalsOrange);
    // console.log("Blue: " + thisMatchBlue + ", scores: " + goalsBlue);

    return <div key={i} className="row">
      <div className="col-sm-1"></div>
      <div className={`col-sm-4 border text-center bg-warning`} >
        {thisMatchOrange.join(', ')}
      </div>
      <div className="col-sm-1 border text-center bg-secondary text-light">
        {goalsOrange}
      </div>
      <div className="col-sm-1 border text-center bg-secondary text-light">
        {goalsBlue}
      </div>
      <div className={`col-sm-4 border text-center bg-primary }`}>
        {thisMatchBlue.join(', ')}
      </div>
      <div className="col-sm-1"></div>
    </div>

  })
  return new_array;

};

export default App;
