'use strict';

// Commented Out Since We Are Using It Today And Potentially In The Future:

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

// As Said, Above Commented Code Will Be Used Today And Potentially In The Future,

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

// Today We Will Be Learning About The Other New JavaScript Data Structure,
// We Learnt Sets, Now We Will Learn About Maps, And Its Fundamentals,
// And Let Me Tell You, Maps Are ALOT More Useful Than Sets,
// So, Lettuce Begin🥬!

// Now, What Is A Map, Its Not Related To The Map We Use In Real Life,
// Instead In JavaScript, A Map Is A Data Structure, 
// That We Can Use To Map Values To Keys, So Just Like An Object,
// Data Is Stored In Key Value Pairs In Maps, Now The Big Difference,
// Between Objects And Maps, Is That In Maps The Keys Can Have Any Type,
// This Is Huge, Since In Objects The Keys Are Basically Always Strings,
// Which Can Lead To Some Really Great And Advanced Stuff,
// We'll Start By Creating A Restaurant Map Here, Which I'll Call "rest",
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));
// The Easiest Way To Create A Map, Is To Make An Empty Map Without Passing In Anything,
// Then To Fill Up The Map, We Used The Set Method, After That We Pass Into Arguments,
// First Being The Key Name, And Then The Name Of The Restaurant Itself,
// You Might See, The Set Method Is Similar To The Method That We Had In Sets,
// Both Allowing Us To Add A New Element To The Data Structure,
// Since We Can Use Any Data Type That We Want, We Said The Restaurant Has Two Locations,
// So There's No Problem Creating A Key With A Number, It Doesnt Have To Be A String,
// Also Calling The Set Method Like That, Updates The Map Its Called Own, And Returns It,
// As Shown By The console.log, That Is Indeed The Case,
// The Fact That The Set Method Allows Us To Update The Map,
// Makes Us Able To Change The Set Method Like This:
rest
.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set('open', 11)
.set('close', 23)
.set(true, 'We Are Open :D')
.set(false, 'We Are Close :(');
// As You Can See, All Of This Was Possible Because Of It,
// Now To Make It Useful, In Order To Read Data From A Map,
// We Use The Get Method, Which Is Available On All Maps,
console.log(rest.set('name'));
console.log(rest.set(true));
console.log(rest.set(1)); // <-- If We Said '1', As A String, It Would Say Undefined, Because Up There 1 Is The Number,
// Now Just For Fun Lets Use The Fact That We Can Have Boolean Keys,
// Lets Have Some Fun With This:
const time = 16;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// Anyways We'll Keep Exploring Methods Available On Maps,
// This Method Can Check If A Map Contains A Certain Key, The Has Method,
console.log(rest.has('categories'))
// We Can Also Delete Elements From The Map, Which Is Based On The Key,
// Caleld The Delete Method,
rest.delete(2);
// console.log(rest);

// Now Comparing This To Objects, We Can Actually Delete Properties From Objects,
// Using The So Called The Delete Operator, Which Is A Really Slow Process,
// So It Is Not Encouraged To Do That Here Usually, Its About The Has Method,
// Actually Objects Do Also Have A Method, Its Called The hasOwnProperty,
// But We Will Talk About It Later In The Future, When We Go Into Object Oriented Programming,
// Anyways, Maps Also Have The Size Property, 
// console.log(rest.size);
// To Finish, We Can Also Basically Remove All the Elements From The Map,
// From The Clear Method,
// rest.clear();

// Now As You Can See, There Is Some Overlap In The Way That We Work,
// With Maps And Sets, Thats Because They Were Both Introduced In ES6,
// Anyways, Now To ACTUALLY Finish😅, I'll Show You That We Can,
// Infact Use Arrays, Or Objects As Map Keys,
const arr = [1, 2];
rest.set(document.querySelector('h1'), 'Heading');
rest.set(/*[1, 2]*/arr, 'Test');
console.log(rest);
console.log(rest.size);

console.log(rest.get(/*[1, 2]*/arr));
// Now Why Didnt It Retrieve The "Test" String, Thats Because,
// Those Two Arrays, Are Actually Not The Same Object,
// Even Though We Wrote Them In The Same Way, So They Have The Same Elements,
// They Are Not The Same Object In The Heap, And The Key There,
// Is Exactly The [1, 2] Object In rest.set([1, 2], 'Test');
// That Object In Memory But Not The Other One, So It Cant Work,
// In Order To Make It Work, We Would Have To Do Create An Array Above It All,
// Then Use The arr Variable Instead Of The Numbers, Then It Works,
// With These We Proved That Objects Can Be Used As Map Keys,
// Which Can Be Very Useful With DOM Elements, Which Are Also Infact Just Special Objects,
// I'll Show It To You Above The console.log(rest);,
// With That, If We Check The Console, In The Array Its There, It Highlights The H1 Text Too,
// Anyways, Keep Learning, Analyzing, Researching And Practicing, And Happy Coding😄💻🩵!