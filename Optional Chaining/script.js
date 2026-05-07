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

// Today We Will Learn About An Even Newer Feature Of Object And Also Arrays,
// Which Is Called Optional Chaining, And This One Is Very Amazing,
// So, Lettuce Begin🥬!

// Let's Say That We Wanted To Get The openingHours Of Our Restaurant For Monday,
// We'll Check It By Using console.log,
// console.log(restaurant.openingHours.mon.open);
// Now, This Property Actually Doesnt Exist, We Can See That It Returns undefined,
// But Lets Pretend That We Dont Know Whether This Restaurant Opens On Monday Or Not,
// And That Could Be The Case For Example If This Data Came From A Real Web Service,
// So A Web API, And In That Service There Could Be Multiple Restaurants,
// Meaning Not All Of Them Would Open On Monday, So We Would Have No Way Of Knowing,
// If This Particular Restaurant, Would Open On Monday Or Not,
// But Now Lets Go Even Further, Because We Actually Want To Know Exactly The Hour,
// On Which The Restaurant Opens On Monday, So We'll Add .open After The .mon,
// In The console.log, Then We'll See What We Get, And We Get An Error,
// Because The Rest Was undefined, So undefined.open Is Not A Valid Operation,
// So, In Order To Avoid This Error, We Would First Have To Check If,
// restaurant.openingHours.mon Exists, So We Could Us An If Statement,
// if (restaurant.openingHours.mon) console.log
// (restaurant.openingHours.mon.open);
// We Could Also Use A Logical Operator, As We Already Learnt Before,
// But This Here Is A Bit More Readable, Anyways, If We Did The Same For,
// Friday For Example, We Would Have To Do The Same Thing,
// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);
// And Then In The Console It Will Show 11 Because Friday Exists In The Object,
// But For Now Lets Focus On Monday, Which Is The Day That Doesnt Exist,
// At Least We Got Rid Of The Error, Anyways, Having This Logic Here,
// Has Really No Problem, But It Is A Bit Tedious, And This Is For Checking,
// Only One Property, But Now Imagine That Opening Hours Here Would Also Be Optional,
// Or In Otherr Words That Maybe The Restaurant Object Can Also Not Have OpeningHours,
// So In This Case, We Would Have To Check For Both, So We Would Have To Do,
if (restaurant.openingHours && restaurant.openingHours.mon) console.log
(restaurant.openingHours.mon.open);
// And This Can Get Out Of Hand Really Fast When We Have Deeply Nested Objects,
// With Lots Of Optional Properties, Sometimes That Can Happen In The Real World,
// And So, ES2020 Introduced A Great Solution To This Problem,
// Which Is A Feature Called Optional Chaining, And With Optional Chaining,
// If A Certain Property Does Not Exist, Then undefined Is Returned Immediately,
// That Will Then Avoid The Kind Of Error We Saw Before, And This Is How It Works,

// WITH OPTIONAL CHAINING:
console.log(restaurant.openingHours.mon?.open); // <-- "?" Is The Optional Chaining Operator,
// So, This Is How Optional Chaining Works, Only If The Property Before "?" Exists,
// In This Case, If Only mon Exists, Then The open Property Will Be Read From There,
// But If Not, Then undefined Will Be Returned Immediately,
// And By Exists, Here It Actually Means The Nullish Concept That We Already Know,
// So A Property Exists If Its Not A Null And Not undefined,
// Meaning If Its Zero Or An Empty String, Then It Still Exists,
// Now If We Look In The Console, We Get undefined, Just To See The Error Again,
// I Will Remove The "?" In The Commented Out Code Below:
// console.log(restaurant.openingHours.mon.open);
// This Will Result In An Error, Again Because Everything Before .open Is undefined,
// Also We Can Have Multiple Optional Chainings, So Lets Recreate,
// The If Statement That We Had Before, But With Optional Chaining,
// Where We Are Testing For Both openingHours And mon,
// So These Are The Two Optional Properties That We Do Not Know If They Exist Beforehand,
// Since We Already Did Check For mon, We Will Now Do So With OpeningHours,
console.log(restaurant.openingHours?.mon?.open);
// Now, If restaurant.openingHours Does Not Even Exist,
// Then The mon Property Will Not Even Be Read, And Thus We Dont Get That Error,
// This Makes It Really Easy To Prevent All Kinds Of Bugs, That Sometimes,
// We Might Not Even Expect, Also Getting Rid Of The Extra Work By Adding The "?",
// But Now Lets See A Little Bit More Of A Real World Example, 
// And For That I Will Be Using The weekdays Array,
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// I'll Call It "days" Here So Its Not The Same Variable,
// Now, What We Want To Do Is Loop Over This Array, And Then Log To The Console,
// Whether The Restaurant Is Open Or Closed, On Each Of These Days,
// This Is A Good Application Of Optional Chaining Right There,
for (const day of days) {
  // console.log(day);
// After Testing With It With console.log(day);, It Works, Now We Can Do Some Code,
// With Each Of The Days, So We'll Now Essentially Do The Same As We Did Up There,
restaurant.openingHours[day]
const open = restaurant.openingHours[day]?.open /* || */ ?? 'closed';
// After restaurant.openingHours, We Cannot Use .day AKA The Dot Notation,
// Because That Is not A Property Name Of The Object,
// So Remember, If We Want To Use The Variable As A Property Name,
// We Use The Bracket Notation, Which We Learnt Way Back In The Fundamentals Section,
// This Would Be The Same As Doing .mon, .tue, .wed, Etc, Since Its Being Taken,
// From The Array Dynamically, And Optional Chaining Works With That Too,
// We Will Now Log It To The Console, Just To See, Because This Is Not Complete Yet,
console.log(`On ${day}, We Open At ${open}`);
};
// Now We Get From Monday To Wednesday, And Sunday, undefined, Since They Dont Exist,
// And We Dont Want That, So, Lets Set A Default Value,
// By Using The Logical "OR" Operator(||), We'll Set It To "closed" As Default,
// But Then It Says We Are Open At Closed 😅, For Now We'll Leave It Like That Still,
// You Might Be Noticing Another Problem Where Saturday Says Its Closed,
// While It Actually Should Be Open 24 Hours Since It Exists,
// This Is Because The Restaurant On Saturday Opens At 0, Which Means 24hrs,
// But 0 Is A Falsy Value, So That Triggers The "OR" Operator,
// And Thus It Returns "closed", The Solution To This Is Using The Nullish Coalescing Operator(??),
// Replacing The "OR" Operator(||), With That(??), Ive Commented Out The "||" Up There,
// This Fixes The Issue, This Is Also A Great Example,
// Of Optional Chaining And The Nullish Coalescing Operator Working Together,
// Infact, They Were Both Introduced In The Same Year, So They're Like Best Friends😄,
// Since Their Concept Is Really Similar, And They Both Solve Similar Problems,

// Now We Move On To Another Topic, Methods:
// METHODS:
// Yes Optional Chaining Does Indeed Work With Calling Methods,
// Essentially We Can Check If A Mehtod Actually Exists Before We Call It,
// We'll Do This For Now, console.logging restaurant.orderPasta, To See If It Exists,
console.log(restaurant.orderPasta?.(2, 4) ?? 'Method Does Not Exist');
// Then We Pass In The "?" And Some Numbers, With The Nullish Coalescing Operator,
// After That We Add 'Method Does Not Exist', As The Default Value If It Doesnt Exist,
// But It Does Exist Here So We Get The Expected Result,
// And If We Call A Method That Doesnt Exist, Like This:
console.log(restaurant.orderRisotto?.(2, 4) ?? 'Method Does Not Exist');
// It Works Now, Since This Doesnt Exist, The Optional Chaining Operator,
// Checks If orderRisotto Exists Or Not, If It Doesnt, It Returns Undefined,
// Then It Goes To That Second Operand Of The Nullish Coalescing Operator,
// And If We Didnt Use The Optional Chaining Operator, It Causes An Error,
// Saying Its Not A Function,

// Now Finally, Optional Chaining Works With Arrays Too,
// ARRAYS:
const users = [
  {name: 'Jane', email: 'IamJane@gmail.com'}
];
// const users = [];

// And Now To Get The Name Of The First Element Of This Array, We Can Do This,
console.log(users[0]?.name ?? 'User Array Empty');
// The "?" Tests If The Value On The Left Does Exist,
// If It Was Empty, Like If I Used The Commented Out Part Of "const users = [];"
// It Would Show User Array Empty As The Array Is Obviously Empty,
// And Without Optional Chaining, We Would Have To Write Something Like This:
// if (users.length > 0) console.log(users[0].name); else console.log('User Array Empty');
// Which Is Obviously A Lot More Work For Absolutely No Reason,
// So Keep Using This Operator, It Is VERY Important, And I Adivse You,
// To Use It With The Nullish Coalescing Operator, Anyways, This Was All For Today,
// Keep On Learning, Researching, Practicing, Analyzing, And Happy Coding😄💻🩵!