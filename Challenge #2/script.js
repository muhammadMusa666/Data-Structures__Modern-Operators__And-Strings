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

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    /*thu*/[weekdays[3]]: {
      open: 12,
      close: 12,
    },
    /*fri*/[weekdays[4]]: {
      open: 11,
      close: 23,
    },
    /*sat*/[weekdays[5]]: {
      open: 0, // Open 24 Hours,
      close: 24,
    },
  };

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery(
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  ) {
    console.log(`Order Received! ${this.starterMenu[starterIndex]} And ${this.mainMenu[mainIndex]}
    Will Be Delivered To ${address} At ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here Is Your Delicious Pasta With ${ing1}, ${ing2} And ${ing3}`,
    );
  },

  orderPizza(mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};

// Today We Will Be Doing A Challenge Of Everything We've Learnt After The Last Challenge,
// Ignore The Above Part, We Wont Be Using It In This Challenge,
// Instead We Will Use The Same Material In The Previous Challenge,
// But The Excercises Will Be Obviously Different, So I Hope You Can Complete This,
// This Challenge Is Actually A Bit Hard, But At Least Try, Best Of Luck!:
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
// With That Being Your Start Code, These Are The Questions You Need To Do:
// 1: Loop Over The game.scored Array And Print Each Player Name To The Console,
// Along With The Goal Number (Example: "Goal 1: Lewandowski"),
// 2: Use A Loop To Calculate The Average Odd And Log It To The Console,
// (We Already Studied How To Calculate Averages, You Can Go Check If You Forgot),
// 3: Print The 3 Odds To The Console, But In A Nice Formatted Way,
// Exactly Like This:
// Odd Of Victory Bayern Munich: 1.33
// Odd Of Draw: 3.25
// Odd Of Victory Borrussia Dortmund: 6.5
// Get The Team Names Directly From The Game Object, Dont Hardcode Them,
// (Except For "Draw"), HINT: Note How The Odds And The Game Objects,
// Have The Same Property Names,

// BONUS: Create An Object Called 'scorers' Which Contains The Names Of The Players,
// Who Scored As Properties, And The Number Of Goals As The Value,
// In This Game, It Will Look Like This:
// {
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2,
//}

// You Can Write Your Solution Below This Comment, GOOD LUCK 😄!: