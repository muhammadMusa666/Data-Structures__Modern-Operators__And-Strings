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

// Today We Will Be Learning About A New Way Of Looping Over Arrays,
// Something Introduced In ES6, And That's The "for-of loop",
// I Will Try To Keep This Short Since This Subrepo Is Only About 1 Statement,
// So, Lettuce Begin🥬,

// Lets Say, That We Wanted To Loop Over Our Entire Menu Here,
// So, Lets Start Creating Our Array With The Entire Menu,
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// Now, We Know How To Loop Over This Array With A for-loop Right?
// We'd Have To Start Setting Up A Counter, A Condition, And Also Update The Counter,
// Which Is Alot Of Work, That's Why We Got The for-of loop,
// Where You Dont Need Any Of That, It Is Much Simpler, This Is How It Works:
for (const item of menu) console.log(item);
// So, This Might Seem Weird, And How Does It Work?
// Well, This Line Basically Is "For" Then item "of" menu,
// This Loop Will Automatically Loop Over The Entire Array,
// And In Each Iteration, It Will Give Us Access To The Current Array Element,
// Which We Can Specify Where In This Case We Specified And Called It "item",
// After We console.log It, We Simply Get Each Element Logged One By One,
// Because Again, The Item Variable Is Always, The Current Element Ine Each Iteration,
// Also, Just Like In The If-Else Statement, We Dont Need A Code Block,
// When We Only Have One Statement Here To Execute, So Thats Pretty Simple,
// This Is A Really Nice Statement Over The Regular for-loop,
// So We Can Do The The Same Thing, But With Underlying Details And Conditions,
// The Great Thing About This, Is We Can Still Use The "continue" And "Break" Keywords,
// And This Is Great To Know, Because In The Next SECTION,
// You Will Learn Other Ways Of Looping Arrays, And In Those Ones,
// You Will Not Be Able To "continue" or "break", So Keep That In Mind,
// But Now, What If We Also Wanted The Current Index, Not Just The Current Element,
// Well In The for-of loop, Its Actually A Bit Of A Pain, When We Need That Index,
// Because Originally, The for-of loop Was Really Just Meant To Give You,
// The Current Element, However You Can Get Both And Have To Do It Like This:
console.log("---GETTING BOTH INDEX AND ELEMENT---")
for (const item of menu.entries()) {
  console.log(item);
};
// We Implement This New entries() Method, Which Is Avaliable On All Arrays,
// As You See In The Console, Each Of The Items Of The Array,
// Are Now Separate Arrays, With The Index And Array Element Itself,
// Now Lets Take A Look What This Mysterious menu.entries Is,
console.log([...menu.entries()]);
// This Is Just To Show You What menu.entries Is, Anyways In The Console,
// We See That Its Basically An Array, Which In Each Position, Contains A New Array,
// Which Contains The Element And The Index Number Of That Element,
// In The Original Array, And So That's What We Get,
// Thats Why We Get The Numbers From 0-6 Plus All Of The Original menu Elements,
// Its Also The Reason Why Then We Get This Output From This Loop Now,
// Because There At Line 106 In The for-of loop's "menu.entries()",
// We Basically Now Have That Array, And Each Item Of That Array,
// Is, Well This New Array In The Console, So If We Wanted To Make A Nice Menu,
// We Can Take Advantage Of This Data Now:
console.log("---MAKING NICER MENU---");
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
};
// Now If We Look In The Console, We See How Nice We've Made The Menu,
// So This Works Great Here, But We're Actually At This Point,
// We Are Smarter Than Doing It Like This, Thats Because,
// If item Is Now An Array, We Can Destructure It, We Dont Have To Manually Take,
// Element Zero and Element One, That Is The Old School Way,
// So Lets Do It In A Better Way, And So We Can Actually De-Strcuture The item Array,
// Right There Where It Is, All We Have To Do Is To Use The De-Structuring Assignment,
// And Create The Two Variables That We Want, Like So:
console.log("---MAKING NICER MENU BUT WITH DESTRUCURING---");
for (const [i, el] of menu.entries()) { // <-- Here We Changed "item" To "[i, el]",
  console.log(`${i + 1}: ${el}`); // Here We Changed "item[0]" To "i" And "item[1]" To "el",
}; // So, If We Look In The Console, We Get The Exact Same Result,
// Now I've Implemented These console.logs On All The Above Codes We Just Went Over,
// To Avoid Confusion And Separate The Stuff In The Console,
// So, This Was All For Today, This Feature Is Really Important Alright? Keep That In Mind,
// Anyways, Keep On Analyzing, Researching, Practicing And Learning From Many Places,
// And I'll See You In The Next Subrepo, Until Then And Onwards, Happy Coding😄💻🩵!