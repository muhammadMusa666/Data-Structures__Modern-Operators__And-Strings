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

  order: function(starterIndex, mainIndex) {
    return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function(starterIndex = 1, mainIndex = 0, time = '20:00', address) {
    console.log(`Order Received! ${this.starterMenu[starterIndex]} And ${this.mainMenu[mainIndex]}
    Will Be Delivered To ${address} At ${time}`);
  },

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here Is Your Declicious Pasta With ${ing1}, ${ing2} And ${ing3}`);
  }
};

// Today, We Will Learn About The Amazing Spread Operator,
// Which We Use To Basically Expand An Array Into Individual Elements,
// Basically Unpacking All The Elements Of An Array At Once.
// Lettuce🥬 Begin, So Lets Say That We Have An Array,
const arr = [4, 8, 16];
// And We Want To Create A New Array Based On This Array,
// But With Some New Elements At The Beginning,
// Well, With What We Already Know, We Would Need To Loop Over This Array,
// Or Worse, Do It Manually, For Example,
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // [ 1, 2, 4, 8, 16 ]
// Which Is Way Longer For No Reason, Hard To Read And Most Importantly, Bad Practice,
// But With The Spread Operator, We Can Simply Do This,
const newArr = [1, 2, ...arr];
// Also, If We Removed The Triple Dots, AKA The Spread Operator,
// Then We Would Have The arr Array Inside Of The newArr(Nested Array),
// Again, With The Spread Operator, It Expands The arr Array,
// Into Individual Elements, So The newArr Array Contains 5 Elements,
// So, What This Means, Is That We Can Use The Spread Operator,
// Whenever We Would Otherwise Write Multiple Values Separated By Commas,
// And That Situation Happens Whenever We Write An Array Literal,
// Like We Did Up There With The arr, Thats The First Situation,
// Where Its Very Useful To Expand An Array, And The Second Situation,
// Is When We Want To Pass Elements Of An Array As Individual Arguments To A Function,
// So For Example, Lets Say That We Wanted To Log The Individual Elements,
// Of The newArr Array Here, And If We Simply Logged The newArr,
// It Will Of Course Look Like What We ALready Have Shown In The Console,
// Instead, By Using The Spread Operator, We Expand The Array, Then See What Happens,
console.log(...newArr); // 1 2 4 8 16
// And It Works As Expected, Same To If We Wrote console.log(1, 2, 4, 8, 16),
// As They Both Show The Elements Individually, So Once Again,
// Whenever We Need The Elements Of An Array Separately/Individually,
// Then We Can Use The Spread Operator, Which Is Useful When We Write An Array,
// And When We Need To Pass Multiple Elements Into A Function,
// Now, Lets See A Bit More Of A Useful And Better Example,
// In This Example, We Will Create An Array, With One More Food Item,
// In The mainMenu Array, So That mainMenu Is At restaurant.mainMenu,
// And So Basically We Want To Create A New Menu Here,
const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu); // [ 'Pizza', 'Pasta', 'Risotto', 'Gnocchi' ]
// Here, We Said, That We Want The Original Array, Plus One New Element,
// And So We Used The Spread Operator And Expanded The Original Array,
// Then Added The New Element At The End, And Then Just Simply Log It To The Console,
// Also, Keep In Mind That Here We Are Creating A Completely New Array,
// And Just Simply Expanding The Original Array, Then Adding Another Element To It,
// Now You Might Have Noticed That The Spread Operator Is A Bit Similar To Destructuring,
// Because With Destructuring, We Also Unpack Elements From An Array,
// But The Difference Is That Destructuring Actually Creates New Variables,
// While The Spread Operator Does Not Create New Variables,
// And Takes All The Elements In An Array,
// It Simply Expands An Array Where We Need It To Be Expanded,
// As A Consequence, We Can Only Use It In Places Where We Would Otherwise,
// Write Values Separated By Commas, This Is A Very Important Note,
// So Thats The Big Difference Between Destructuring And The Spread Operator,
// Next, Lets Learn About Two Important Use Cases Of The Spread Operator,
// Which Is To Create Shallow Copies Of Arrays, And To Merge Two Arrays Together,
// Copy Array:
const mainMenuCopy = [...restaurant.mainMenu];
// Here, We Simply Created A Shallow Copy Of The mainMenu Array,
// By Creating A New Array, Then Expanding The mainMenu Array Inside Of It,
// This Is Similar To What We Did In The Previous Section, Which Was Object.assign(),
// I Think, But Here, This Syntax Is Way Easier, And Cleaner To Use,
// Now To Join Two Arrays Together, We Can Do This,
// Merge Arrays:
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
// Here, We Created A New Array Called menu, Also You Should Know How This Works By Now,
// But Anyways, We Expanded Both The starterMenu And mainMenu Arrays Inside Of It,
// So That We Have All The Elements From Both Arrays In This New menu Array, Cool Right?

// Now, As I Told You Before, That The Spread Operator Works On Arrays,
// But Thats Not Entirely True, It Actually Works On All, So-Called Iterables,
// So, What Are Iterables? Well, There Are Different Iterables In JavaScript,
// And We Will Talk About All Of Them Later In The Future,
// But For Now, Just Know That Iterables Are Things Like All;
// Arrays, Strings, Maps, Or Sets, But Not Objects,
// So Basically, Most Of The Built-In Data Structures In JavaScript Are Now Iterables,
// But Except Objects, So Let Me Write That Here For You,
// Iterables: Arrays, Strings, Maps, Sets. NOT Objects.
// So This Means That We Can Use The Spread Operator On Strings As Well,
const str = 'Mustafa';
const letters = [...str, ' ', 'S.'];
console.log(letters); // [ 'M', 'u', 's', 't', 'a', 'f', 'a', ' ', 'S.', ]
// Here, We See In The Console, As Expected, Each Letter In The Original String,
// Is Now An Individual Element, So Just Like We Expanded/Unpacked An Array Before,
// We Did The Same Thing With A String, And Also Added One More Element At The End,
// Now Just Keep In Mind, That We Can Still Only Use The Spread Operator,
// When Building An Array Or When We Pass Values Into A Function,
// For Example, We Can Also Do This,
console.log(...str); // M u s t a f a
// This Is The Same As Writing Each Letter Individually, Separated By Commas,
// But We Cannot Do Something Like This, For Example,
// console.log(`${...str} S.`); // Invalid Syntax Error
// Because We Cant Use The Spread Operator To Build A String Using Template Literals,
// I Will Have To Comment Out That Invalid Syntax Code To Prevent Errors And Issues,
// So Again, Multiple Values Separated By Commas, Are Usually Only Expected,
// When We Pass Arguments Into A Function, Or When We're Building A New Array,
// That Is Also A Very Important Thing To Know, So Take Notes As Advice,

// But Now, Enough With Building Arrays, Let's Actually Write Our Own Function,
// That Accepts Multiple Arguments, And Then Use The Spread Operator,
// To Pass Those Arguments, And So That's Gonna Be A Very Realistic Example Right There,
// So, Lets Add Another Method To The restaurant Object,
// Which Will Be To Just Order Pasta, And We Will Call This Method orderPasta,
// And This Pasta Will Always Have Exactly 3 Ingredients,
// After Writing That Method, We Can Call It Like This,
// Now First We'll Actually Get These Ingredients From The Prompt Window,
const ingredients = [
  prompt("Let's Make Pasta! Ingredient 1?"),
  prompt("Let's Make Pasta! Ingredient 2?"),
  prompt("Let's Make Pasta! Ingredient 3?"),
]; // This Is Just So That We Can Input The Data Ourselves, Not Related To The Operator,
// Here We Are Simply Creating An Array Called Ingredients,
// And This Clearly Works, You Can Input It From The Prompt Window,
console.log(ingredients);
// Now How Should We Actually Call The Function?
// Well, We Could Do It Like This, Which Is The Old Way Of Doing It,
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// But With The Newly Learnt Spread Operator, We Can Simply Do This,
restaurant.orderPasta(...ingredients);

// Now, Lets Experiment With This,
// The First Example Here Is To Create A New Initial Array, Right?
// And So Lets Now Also Create A New Restaurant Object,
// With All The Data From The Original Old Restaurant Object, With Some Additional Data,
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);
// Here, We Created A New Object Called newRestaurant,
// And Then We Added Some New Properties To It,
// Like FoundedIn And Founder, And In Between Them,
// We Simply Expanded The Old restaurant Object,
// So That We Have All The Properties From The Old Object In The New Object,
// This Is How We Can Use The Spread Operator With Objects,
// Now Anyways, I Think This Is Enough For Today,
// Wait One More Thing, Since We Were Able To Do Shallow Copies Of Arrays,
// Using The Spread Operator, We Can Do The Same Thing With Objects As Well,
// Instead Of Just Using Object.assign(), As We Did Before,
const restaurantCopy = {...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name); // Ristorante Roma
console.log(restaurant.name); // Classico Italiano
// As You Can See, We Created A Shallow Copy Of The restaurant Object,
// With The Both Original And New Restaurant Names,
// Now Finally😅, This Is All For Today, I Hope You Learned Something New Today,
// This Is Also, Like Before, Such A Big Subrepo,
// Since We're Not Learning This In A Project,
// Your Understanding Better And In A More Clean Way,
// Anyways, Keep Analyzing, Researching, Practicing And Learning,
// And Happy Coding😄🩵💻!





