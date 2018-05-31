function getMatchesByDay(dayId,state){
  let matches = [];
  for(let k = 0; k < state.matches.length; k++){
    matches.push({matchNr: k+1});
  }

  for(let k = 0; k < matches.length; k++){
    let goalsDay1 = state.goals.filter(({matchNumber }) => matchNumber   === matches[k].matchNr)
    let twoTeams = findColorTeams(state.teams,goalsDay1);
    matches[k].teams = twoTeams;
    let goalsInMatch = findGoalsInMatch(twoTeams,goalsDay1);
    matches[k].goals = goalsInMatch;
    let goalscorers;
    for(let i = 0; i < 2; i++){
      goalscorers = findGoalscorers(twoTeams[i],goalsDay1);
      if(i === 0){
        matches[k].goalscorers_1 = goalscorers;
      } else {
        matches[k].goalscorers_2 = goalscorers;
      }
    }

    function findColorTeams(teams,goalsDay){
      let colorsTeam = [];
      for(let i = 0; i < goalsDay.length; i++){
        for(let j = 0; j < teams.length; j++){
          if(goalsDay[i].team === teams[j].color){
            colorsTeam.push(goalsDay[i].team);
          }
        }
      }
      let twoColors = [];
      let colors;
      for(let i = 0; i< colorsTeam.length; i++){
        if(colorsTeam[i] !== colors){
          twoColors.push(colorsTeam[i]);
          colors = colorsTeam[i];
        } 
      }
      return twoColors;
    }

    function findGoalsInMatch(teams,goalsDay){
      let goalsTeams = [];
      for(let i = 0; i < 2; i++){
        goalsTeams.push(goalsDay.filter(({team}) => team === teams[i]).length);
      }
      return goalsTeams;
    }
    
    function findGoalscorers(teams,goalsDay){
      let goalscorers = [];
      let goals;
      for(let i = 0; i < 1; i++){
        goals = goalsDay.filter(({team}) => team === teams)
        for(let j = 0; j < goals.length; j++){
          goalscorers.push(goals[j].player);
        }
      }
      return goalscorers;
    }
  }
  
  return matches;

}
console.log(getMatchesByDay(
  1,
  {
    players: [
      { id: 0, name: "Maciek" },
      { id: 1, name: "Jan" },
      { id: 2, name: "Piotrek" },
      { id: 3, name: "Jacek" },
      { id: 4, name: "Mateusz" },
      { id: 5, name: "Michał" },
      { id: 6, name: "Paweł" }
    ],
    teams: [
      { id: 0, color: "white" },
      { id: 1, color: "orange" },
      { id: 2, color: "blue" }
    ],
    days: [
      {id: 1},
      {id: 2}
    ],
    goals: [
      { id: 0, matchNumber: 1, player: "Mateusz", team: "orange" },
      { id: 1, matchNumber: 1, player: "Michał", team: "blue" },
      { id: 2, matchNumber: 1, player: "Paweł", team: "blue" },
      { id: 3, matchNumber: 1, player: "Jacek", team: "blue" },
      { id: 4, matchNumber: 2, player: "Karol", team: "white" },
      { id: 5, matchNumber: 2, player: "Janek", team: "white" },
      { id: 6, matchNumber: 2, player: "Leon", team: "blue" },
      { id: 7, matchNumber: 2, player: "Jacek", team: "blue" },
      { id: 8, matchNumber: 3, player: "Karol", team: "white" },
      { id: 9, matchNumber: 3, player: "Piotrek", team: "white" },
      { id: 10, matchNumber: 3, player: "Karol", team: "white" },
      { id: 11, matchNumber: 3, player: "Alan", team: "white" },
      { id: 12, matchNumber: 3, player: "Mateusz", team: "orange" },
      { id: 13, matchNumber: 3, player: "Wojtek", team: "orange" },
      { id: 14, matchNumber: 3, player: "Jan", team: "orange" },
    ],
    matches: [
      {id: 1, day: 1},
      {id: 2, day: 1},
      {id: 3, day: 1}
      
    ]
  }))