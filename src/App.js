import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
  constructor(){
    super();
    this.state = {
      players: [
        {id: 0, name: "Maciek"},
        {id: 1, name: "Jan"},
        {id: 2, name: "Piotrek"},
        {id: 3, name: "Jacek"},
        {id: 4, name: "Mateusz"},
        {id: 5, name: "Michał"},
        {id: 6, name: "Paweł"}
      ],
      teams: [
        {id: 0, color: "white"},
        {id: 1, color: "orange"},
        {id: 2, color: "blue"}
      ],
      matchNumber: 1,
      goals: [
        {id: 0, matchNumber: 1, player: "Mateusz", team: "orange"},
        {id: 1, matchNumber: 1, player: "Michał", team: "blue"},
        {id: 2, matchNumber: 1, player: "Paweł", team: "blue"},
        {id: 3, matchNumber: 1, player: "Jacek", team: "blue"},
        {id: 4, matchNumber: 2, player: "Karol", team: "white"},
        {id: 5, matchNumber: 2, player: "Janek", team: "white"},
        {id: 6, matchNumber: 2, player: "Leon", team: "blue"},
        {id: 7, matchNumber: 2, player: "Jacek", team: "blue"},
        {id: 8, matchNumber: 3, player: "Karol", team: "white"},
        {id: 9, matchNumber: 3, player: "Piotrek", team: "white"},
        {id: 10, matchNumber: 3, player: "Karol", team: "white"},
        {id: 11, matchNumber: 3, player: "Alan", team: "white"},
        {id: 12, matchNumber: 3, player: "Mateusz", team: "orange"},
        {id: 13, matchNumber: 3, player: "Wojtek", team: "orange"},
        {id: 14, matchNumber: 3, player: "Jan", team: "orange"},
      ]
    }
  }

  addNewMatch = () => {
    if(this.state.goals[2].matchNumber === 1){
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

const NextRow = ({goals}) => {


  let newMatchNumber = 0;
  var new_array = goals.map((p,i) => {

    let matchNumber = goals[i].matchNumber;
    // console.log("bleble: "+matchNumber);
    if(newMatchNumber === matchNumber){
      console.log("to jest ten sam mecz");
      return;
    } else {
      console.log("NMN-1= "+newMatchNumber);
      newMatchNumber = matchNumber;
      console.log("NMN-2= "+newMatchNumber);
    }

    let thisMatchOrange = [];
    let goalsOrange = 0;

    
    for(let j = 0; j < goals.length; j++){
      if(goals[j].matchNumber === i && goals[j].team === "orange"){
        thisMatchOrange.push(goals[j].player);
        goalsOrange++;
      }
    }

    let thisMatchBlue = [];
    let goalsBlue = 0
    for(let j = 0; j < goals.length; j++){
      if(goals[j].matchNumber === i && goals[j].team === "blue"){
        thisMatchBlue.push(goals[j].player);
        goalsBlue++;
      }
    }
    console.log("Orange: " + thisMatchOrange + ", scores: " + goalsOrange);
    console.log("Blue: " + thisMatchBlue + ", scores: " + goalsBlue);

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
