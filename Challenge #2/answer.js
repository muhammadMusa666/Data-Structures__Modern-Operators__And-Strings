'use strict';
// Hopefully You Tried Your Best In The Challenge,
// And Did Get The Answer Right, Even If The Rest Was Different From Mine,
// As You Will See The Bonus Questions Will Not Be Here,
// But Anyways, Here's The Answer, I Will See You In The Next Subrepo😄💻🩵!

// 1:
for (const [i, player] of game.scored.entries());
  console.log(`Goal ${i + 1}: ${player}`);

// 2:
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds);
average /= odds.length;
console.log(average);

// 3.
for(const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`;
  console.log(`Odd Of ${teamStr} ${odd}`);
};

// Paste This Code In script.js Below The Start Code To Make It Work,
// Or Dont If You Did It Yourself, Or Just Put It There Commented For Reference,
// I Dont Know What Else To Say😅, Anyways, Hope You Did Indeed Completed The Challenge,
// Keep Learning, Practicing, Analyzing, And Researching, And Happy Coding😄💻🩵!




