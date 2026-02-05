'use strict';

// Data Needed For A Later Exercise:
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// As Said Before, Above Code Will Be Used Later In This Section.

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openinHours: {
    thu: {
      open: 12,
      close: 12,
    },
    fir: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 Hours,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function (
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  ) {
    console.log(`Order Received! ${this.starterMenu[starterIndex]} And ${this.mainMenu[mainIndex]}
    Will Be Delivered To ${address} At ${time}`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here Is Your Declicious Pasta With ${ing1}, ${ing2} And ${ing3}`,
    );
  },
  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};

// Today, We Will Be Doing Our Challenge As I Stated In The Previous Subrepo,
// So, This Is The Starting Data/Code Required For The Challenge:
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Martinez', 'Lewandowski', 'Hummels'],
  date: 'Nov 16th, 2032',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// That Right There Is Your Starting Data/Code, Now, You Have 7 Tasks To Complete:
// 1. Create one player array for each team (variables 'players1' and 'players2'),
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining field players,
// 3. Create an array 'allPlayers' containing all players of both teams (20 players),
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic',
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2'),
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in),
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator,

// TEST DATA FOR 6: Use Players 'Davies', 'Muller', 'Lewandowski' And 'Martinez',
// Then Call The Function Again With Players From game.scored,

// This Might Seem Like ALOT Of Work, And Very Hard To Do,
// But Trust Me, Most Of These Will Take Like 5 Minutes Or Something,
// Except The Last 6-7😅, Anyways, Good Luck! You'll Find The Answers,
// In The answers.js File, You Can Do The Challenge In The Empty Space Below,
// Or Just Create A Separate File And Do It There,

















































