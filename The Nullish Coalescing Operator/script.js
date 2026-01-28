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

// Today We Will Be Learning About A New Operator, So Called,
// The Nullish Coaliscing Operator(??),
// Previously, We Used The OR Operator, To Set A Default Value,
// In Case That The First Value Was A Falsy Value, Like This:
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);
// Here, Like We Learned In The Previous Subrepo, numGuests Is 0,
// Which Is A Falsy Value, So JavaScript Will Take The Default Value Of 10,
// And Assign It To guests, Since The First Operand Is Falsy,
// JavaScript Therefore Goes To The 2nd One, Fortunately For Us,
// There Is A Very Good Solution To This, Which Is The New Weirdly Named Operator,
// Nullish Coalescing Operator, An Operator Introduced In ES2020, It Works As So:
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
// Here, The "??" Operator, AKA The Nullish Coalescing Operator,
// Is Very Similar To The OR Operator, But It Will Fix Our Error Here,
// After We Log It To The Console, We See That The Result Is 0,
// And If We Comment Out The restaurant.numGuests = 0;, We Get The Default Value 10,
// So Why Does This Work? Well Thats Because, The Nullish Coalescing Operator,
// Works With The Concept, Of Nullish Values, Instead Of Falsy Values,
// Nullish Values Are Null, And Undefined, Thats It, It Doesnt Include A 0,
// Or The Empty String(NEITHER 0 OR ''), So For The Nullish Coalescing Operator,
// It Is As If The Zero And Empty String, Are Not Falsy Values,
// Instead Are Regarded As Truthy Values, But It Works With The Principle,
// Of Nullish Values, And So Only Nullish Values Will Short-Circuit The Evaluation,
// I Suggest Taking A Note Here, This A Key Point You Should Know About This,
// Meaning If Only This Was null Or undefined, Only Then The 2nd Operand,
// Would Be Executed And Returned, Here If numGuests Doesnt Exist, It Will Show 10,
// Since Then restaurant.numGuests Will Be Undefined Which Is A Nullish Value,
// But If Uncomment It, And Set It To 0, Then Since 0 Is Not A Nullish Value,
// It Prints 0 In The Console, Because It Considers 0 And '' As Truthy Values,
// Now, You Might Be Expecting More Stuff About This Operator,
// But As Promised In The Previous Subrepo, I Was Gonna Keep This Short😉,
// So, This Is Actually All For Today😄, This Is A Really Great Operator By The Way,
// It Is Very Useful In Many Parts, Even Though Right Now It Might Not Seem As So,
// I Cant Say The Same About The Next Subrepo Though😅, It Will Be Long,
// Or At Least Definitly Longer Than This, I Will However Like I Always Say,
// At Least Try To Keep It Short, Either Way Your Probably Starting To Understand,
// The Long Subrepos Of Mine, So It Wont Be As Big Of A Deal😉,
// Especially If You've Been Following Me Since The Beginning Of This Journey😄,
// But Anyways, Im Literally Making This Longer With All Of This😅
// So, Keep Analyzing, Researching, Practicing, And Learning, Anyway You Can,
// With All Of Your Sources, From Me, And Everything Else, So, Happy Coding😄💻🩵!





