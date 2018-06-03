import { findColorTeams, findGoalsInMatch, findGoalscorers, getMatchesByDay } from './getMatchesByDay';

it('findColorTeams', () => {
  const result = findColorTeams([
    { id: 0, color: "white" },
    { id: 1, color: "orange" },
    { id: 2, color: "blue" },
  ],
  [
    { id: 0, matchId: 1, playerId: 4, teamId: 1 },
    { id: 1, matchId: 1, playerId: 5, teamId: 2 },
    { id: 2, matchId: 1, playerId: 6, teamId: 2 },
    { id: 3, matchId: 1, playerId: 3, teamId: 2 }
  ]);

  expect(result).toEqual([1 , 2]);
});

it('findColorTeams', () => {
  const result = findColorTeams([
    { id: 0, color: "white" },
    { id: 1, color: "orange" },
    { id: 2, color: "blue" },
  ],
  [
    { id: 4, matchId: 2, playerId: 7, teamId: 0 },
    { id: 5, matchId: 2, playerId: 8, teamId: 0 },
    { id: 6, matchId: 2, playerId: 9, teamId: 2 },
    { id: 7, matchId: 2, playerId: 3, teamId: 2 }
  ]);

  expect(result).toEqual([0 , 2]);
});

it('findGoalsInMatch', () => {
  const result = findGoalsInMatch([
    1 , 2
  ],
  [
    { id: 0, matchId: 1, playerId: 4, teamId: 1 },
    { id: 1, matchId: 1, playerId: 5, teamId: 2 },
    { id: 2, matchId: 1, playerId: 6, teamId: 2 },
    { id: 3, matchId: 1, playerId: 3, teamId: 2 }
  ]);

  expect(result).toEqual([1 , 3]);
});

it('findGoalscorers1', () => {
  const result = findGoalscorers(
    1,
  [
    { id: 0, matchId: 1, playerId: 4, teamId: 1 },
    { id: 1, matchId: 1, playerId: 5, teamId: 2 },
    { id: 2, matchId: 1, playerId: 6, teamId: 2 },
    { id: 3, matchId: 1, playerId: 3, teamId: 2 }
  ]);

  expect(result).toEqual([4]);
});

it('findGoalscorers2', () => {
  const result = findGoalscorers(
    2,
  [
    { id: 0, matchId: 1, playerId: 4, teamId: 1 },
    { id: 1, matchId: 1, playerId: 5, teamId: 2 },
    { id: 2, matchId: 1, playerId: 6, teamId: 2 },
    { id: 3, matchId: 1, playerId: 3, teamId: 2 }
  ]);

  expect(result).toEqual([5,6,3]);
});

it('getMatchesByDay', () => {
  const result = getMatchesByDay(
    1,
    {
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
        {id: 1},
        {id: 2}
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
        {id: 1, dayId: 1},
        {id: 2, dayId: 1},
        {id: 3, dayId: 1}
        
      ]
    });

  expect(result).toEqual(
    [
      {"dayId": 1,
      "id": 1, 
      "teams": [1, 2],
      "goals": [1, 3], 
      "goalscorers_1": [4], 
      "goalscorers_2": [5,6,3] 
      }, 
      {"dayId": 1, 
      "id": 2, 
      "teams": [0, 2],
      "goals": [2, 2], 
      "goalscorers_1": [7,8], 
      "goalscorers_2": [9,3] 
      }, 
      {"dayId": 1, 
      "id": 3, 
      "teams": [0, 1],
      "goals": [4, 3], 
      "goalscorers_1": [7,2,7,10], 
      "goalscorers_2": [4,11,1] 
      }
    ]
  );
});
