'use strict';
// Hope You Successfully Completed This Challenge😄,
// Even If You Didnt Do It Perfectly As This,
// You At Least Tried, Which Is Where All Experts Begin From🫡,
// If You Didnt Do All Of The Tasks, At Least 4 Would We Great, But Anyways:
const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];a
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

const {odds: {team1, x: draw, team2}} = game;

const printGoals = function(...players) {
  console.log(players);
  console.log(`${players.length} Goals Were Scored`)
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Gnarby');
printGoals(...game.scored);

team1 < team2 && console.log('Team-1 Is More Likely To Win');
// If Your Sad You Coudlnt Do The Last 2, Then That Is Completely Fine,
// Because Its Obviously Harder Than The Other 5, And Doing 4 Doesnt Change That Fact,
// You Tried, Thats What Matters😉💙, Oh And If You Did Do All 7,
// And Perfectly, Then Congratulations, Unless Your Like A Pro Dev Seeing This😅,
// Keep Practicing, Analyzing, Researching, And Learning, And Happy Coding😄🩵💻💙!