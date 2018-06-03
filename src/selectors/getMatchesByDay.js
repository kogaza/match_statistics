/**
 * 
 * @param {{id: number, color: string}[]} teams 
 * @param {*} goalsDay 
 */
export function findColorTeams(teams,goalsDay){
  let colorsTeam = [];
  for(let i = 0; i < goalsDay.length; i++){
    for(let j = 0; j < teams.length; j++){
      if(goalsDay[i].teamId === teams[j].id){
        colorsTeam.push(teams[j].id);
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

export function findGoalsInMatch(teams,goalsDay){
  let goalsTeams = [];
  for(let i = 0; i < 2; i++){
    goalsTeams.push(goalsDay.filter(({teamId}) => teamId === teams[i]).length);
  }
  return goalsTeams;
}

export function findGoalscorers(team,goalsDay){
  let goalscorers = [];
  let goals;
  goals = goalsDay.filter(({teamId}) => teamId === team)
  for(let j = 0; j < goals.length; j++){
    goalscorers.push(goals[j].playerId);
  }
  
  return goalscorers;
}
//-------------------------------------------------------------------------
export function getMatchesByDay(dayId,state){
  let matches = state.matches.filter(m => m.dayId === dayId);

  for(let k = 0; k < matches.length; k++){
    let goalsDay1 = state.goals.filter(({matchId }) => matchId   === matches[k].id);
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
  }
  
  return matches;

}
