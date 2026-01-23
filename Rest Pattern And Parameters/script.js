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

// Today, We Will Learn About The Rest Pattern, And Also Rest Parameters,
// So Lettuce🥬 Begin!

// Now, The Rest Pattern Looks Exactly Like The Spread Operator,
// It Has The Same Triple Dot Syntax, But Is Actually The Opposite Of The Operator,
// That Doesnt Make Much Sense, But Let Me Explain,
// The Spread Operator Is Used To Build New Arrays Or To Pass Values Into Functions,
// Which Are The Two Maine Use Cases Of The Spread Operator,
// And In Both Cases, We Use The Spread Operator To Expand An Array Into Individual Elements,
// Now The Rest Pattern Uses The Exact Same Syntax,
// However, To Collect Multiple Elements And Condense Them Into An Array,
// Which Is The Opposite Of Spread, Since The Spread Operator Is To Unpack An Array,
// Rest, Is To Pack Elements Into An Array, So Lets Write Some Code To Rid Confusion,
// We'll Start By Exploring The Use Case Of Building Arrays,
// As A Recap, What We Did In The Last Subrepo Was To:
const arr = [1, 2, ...[3, 4]]; // <-- Using Spread To Expand The Array,
// Now, We Know This Is The Spread Syntax, Because We Are Using It On The Right,
// Of The Assignment Operator("=" Sign), So Here, We Are Expanding The Array [3,4],
// So, Now You Might Be Saying, That To Do The Rest Pattern, We Just Do The Opposite,
// While Destructuring, Well, Your Totally Right, So Let's See How That Works,
// Let's Say We Have An Array Like This:
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
// This Is The Rest Syntax, Because Just Like You Might Expect,
// We Are Using The Triple Dot On The Left Side Of The Assignment Operator This Time,
// As A Result, We See In The Console, That We Get The First Two Elements,
// Then The Rest Which WERENT Inside The Original Array,
// So The Rest Pattern Basically Collects The Elements That Are Unused,
// In The Destructuring Assignment, And Puts Them Into An Array, Here's Another Example,
// And This Example Will Show You That We Can Infact Use The Triple Dots,
// On Both Sides Of The Assignment, Lets Say We Have An Array,
// Which Will Be The Entire Menu, And We Know How To Build That With The Spread Operator,

// ARRAYS:
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
// Here, We First Used The Spread Operator To Build The Array,
// Then We Used The Rest Pattern At The Left Side To Get The Pizza And Risotto,
// From The mainMenu, We Will Take the Pizza And Risotto,
// And The Rest Will Be Stored In The OtherFood Variable,
// Also Notice That The Skipped Elements Dont Get Counted In The Rest Pattern,
// So Here, The Garlic Bread And Caprese Salad Are Not Included,
// In The OtherFood Array, Because They Were Skipped,
// And If You Type Something Else After The otherFood Variable(Rest Pattern),
// You Will Get An Error, Because The Rest Pattern Must Always Be The Last Element,
// Now, Lets Do The Same Thing With Objects, Because It Works With Them Aswell,
// So Lets Work With The openinHours Object From The Restaurant Object,

// OBJECTS:
const { sat, ...weekdays } = restaurant.openinHours;
// Here We Only Select The Day Saturday From The openinHours Object,
// And The Rest Of The Days Will Be Stored In The weekdays Variable,
console.log(sat, weekdays); // <-- It Creates A New Object,
// So Now We Know How The Rest Pattern Works To Collect Elements,
// In A Destructuring Assignment, But We Still Havent Seen It In Functions,

// Functions
// The Second Use Case Is The Most Used One, Which Is To Use It In Functions,
// To Pass Multiple Arguments Into A Function, All At The Same Time,
// And We Did This In Our Real Example With The ingredients Array,
// In The Previous Subrepo, We Had This Array, Then We Expanded All Of These Elements,
// Of The Array, To Basically Pass Them As Individual Arguments Of The Function,
// And As You Can Guess, The Rest Operator Basically Does The Opposite,
// So Now, Lets See How The Rest Operator Works In Functions,
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 4);
add(8, 16, 32);
add(42, 64, 96, 128, 256, 412, 824);
// Here, We Took An Arbitrary Amount Of Arguments, Just Like In A Real Adding Function,
// So Of Course, With That Many Arguments, We're Not Gonna Specify That Many, Right?
// And So, We Will Use The Rest Pattern, Which Are "Rest Parameters" In This Case,
// By Using The Rest Syntax In The Area Were We Put Paramters, Then The Parameter Name,
// Then, We Simply Log It To The Console,
// So This Function Is Gonna Be Called Three Times, So Three Arrays Should Appear,
// As Said Before, The Rest Syntax Is Taking Multiple Numbers,
// Or Multiple Values And Packing Them Into One Array,
// So Once More It Is Doing The Opposite Of The Spread Operator,
// In The Rest Operator, We Expand With The Rest Syntax We Compress,
// Thats Why Here, We Call These Rest Arguments,
// Anyways, We Will Write Some Simple Logic In The Function Now,
// Then We Log The sum To The Console, And It Works With All The Numbers Added Up,
// Now We Take It To The Next Level, We Create Another Array, And Call It "x",
const x = [18, 36, 42, 69];
add(...x);
// Here, To Call The add Function With These Three Values,
// We Simply Used The Spread Operator, This Is What We Learned In The Previous Subrepo,
// Because, After These Numbers Are Spread Here,
// They Will Then Enter This add Function Here, And Be Immediatly Collected,
// Into The numbers Array By The Rest Parameters, So Basically,
// At The ...x We Unpacked The Values And At The numbers Array We Packed Them Back Into An Array,
// Now You Might Be Wondering, Why Not Just Write An add Function,
// Which Takes An Array As An Argument, Well Because This Is Much Better,
// Because The Function Can Then Accept Both An Array, And All The Single Values,
// It Is Also A Bit More Natural, To Simply Pass As Many Arguments As We Want Together,
// Just To Finish This, Lets Use The Rest Parameters In Our Restaurant Example,
// To Some Actual Cases, So We'll Ad Another Method There,
// Below The orderPasta, We'll Do orderPizza This Time,
// Now, Pizzas Need To Have At Least One Ingredient, And The Others Are Optional,
// So For This, Rest Parameters Are Perfect, We'll Do mainIng And otherIng,
// Also This Might Seem A Little Bit Like Destructuring,
// Where The Triple Dots Will Collect All Of The Rest Of The Arguments, Into An Array,
// With console.log, We Can Test If So, Then Lets Specify Our Ingredients,
restaurant.orderPizza('Mushrooms', 'Onion', 'Olives', 'Spinach');
// A Noice Vegetarian Pizza, Now, In The Console, We Get Mushrooms As The First Ing,
// And The Rest As Optional Ingredients, Which Is The Result Of Rest Arguments,
// So, The First Argument Was Stored In The mainIng,
// And The Rest Was In The otherIng, We Can Also Simply Define One,
restaurant.orderPizza('Mushroom')
// Then the Remaining Arguments, Will Simply Not Show, And We Get An Empty Array,
// Which We Could Work With If We Want, In That Function, We Could Now Create Some Logic,
// Like Creating A String Based On All These Ingredients,
// But I'm Not Going In That Hell Hole Right Now, If You Want Some Fun,
// Then Feel Free To Do So Of Course,
// Anyways, This Was All For Today, I Was Trying To Keep This Short,
// But Oh Well😅, Still Is Shorter Than Previous Ones😄,
// So, This Was For Some, A Little Bit Of A Confusing Topic,
// But It Isnt That Deep Or Hard, So Dont Worry😉, Just Keep Trying Either Way🫡,
// So, Keep Researching, Analyzing, Practicing And Learning More About These Topics,
// And Happy Coding😄💻🩵!

