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
  // openingHours: openingHours, <-- Old Way Of Writing It,
  // ES6 Enhanced Object Literal:
  openingHours,

  // openinHours: {
  //   thu: {
  //     open: 12,
  //     close: 12,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 Hours,
  //     close: 24,
  //   },
  // },

  order/*: function*/ (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery/*: function*/ (
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  ) {
    console.log(`Order Received! ${this.starterMenu[starterIndex]} And ${this.mainMenu[mainIndex]}
    Will Be Delivered To ${address} At ${time}`);
  },

  orderPasta/*: function*/ (ing1, ing2, ing3) {
    console.log(
      `Here Is Your Delicious Pasta With ${ing1}, ${ing2} And ${ing3}`,
    );
  },

  orderPizza/*: function*/ (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng); 
  },
};

// Today We Will Be Learning About Enhanced Object Literals,
// Which Is A New Way To Write Objects In ES6,
// It Allows Us To Write Objects In A More Concise And Readable Way,
// We Can Use It To Define Methods, Properties, And Even Computed Property Names,
// You Might Be Seeing That We're Learning About Alot Of ES6 Features,
// And Even Newer Additions Through The Language, Which Is Great,
// Like So Today We're Learning About Enhanced Object Literals,
// Also, You Might See Ive Havent Really Pushed Subrepos For A While😅,
// Its Just Personal Issues, But Anyways, We're Back On Track To Learning More JS😄,
// So, Lettuce Begin🥬!

// Lets Take A Closer Look At Our Restaurant Object,
// So This Restaurant Object Here Is An Object Literal,
// Because We Basically Wrote This Object Literally In Our Code Using Curly Braces,
// Now ES6 Introduced 3 Ways Which Make It Easier To Write Object Literals Like This,
// And We'll Go Though Them One By One, First Of All, Lets Say We Have An Object,
// That Is Outside Of The Restaurant Object, Like That One,
// Which Is Called openingHours, So We'll Take That One,
// And Create Another Separate Object With It Above The Restaurant Object,
// I'll Just Comment Out The openingHours Object Then Make It Above The Restaurant Object,

// With That Done, We Still Want To Have The openingHours Object,
// Inside The Restaurant Object, So, Before ES6, We Would Have To Write It Like This:
// openingHours: openingHours,
// I Will Place This Commented Out Inside The Restaurant Object,
// And So Then, Basically The Restaurant Object Is Restored, If We Test It In The Console,
// So You Can See Where It Should Be, But Anyways, You Might Notice A Slight Problem,
// Which Really Isnt A Problem, But It Can Become Annoying😅,
// Its That The Property Name Of openingHours Is The Same As The Variable Name Of It,
// As Its Where We're Getting The New Object From,
// So, With Enhanced Object Literals, You Dont Need To Write This,
// I Will Make The Enhanced Object Literal Below The Commented Out Old Way,
// As You Can See, It Is Much Much Simpler, And Works Just Like Before,
// And Of Course, If You Change The Object Name Of openingHours To Something Else,
// Like "hours" Then You Would Have To Change It In The Restaurant Object As Well,

// Now, Lets Check Out The Second Enhancement To Object Literals,
// Is About Writing Methods, So IN ES6 We No Longer Need To Create A Property,
// And Then Set It To A Function Expression, Like We've Always Been Doing,
// So Essentially We Create A Property Just Like We Do All The Other Properties,
// Then We Set That To A Function Expression, But Again We No Longer Need To Do So,
// We Can Write It In An Easier Way, That Is To Get Rid Of The function Keyword,
// Aswell As The Semicolon, So We Replace All Of The order,
// orderDelivery, orderPasta, And orderPizza Methods With This New Syntax,
// Which I Really And Most Definitely Prefer, Because It's Much Easier To Write,
// So Now, Everything Will Be Changed To This New Syntax Here,
// Just To Avoid Confusion, I Have Replaced The Function And Semicolon,
// With /*: function*/, So You Can See Where The Old Syntax Was,
// Keep In Mind, If You Prefer The Old Syntax, Its Completely Fine To Use It,
// The New Syntax Doesnt Affect Anything Aside From Being Easier To Write, So Its Your Personal Preferences In The End😄,

// Now The Third And Final Enhancement To Object Literals,
// Is That We Can Now Actually Compute Property Names,
// Instead Of Having To Write Them Manually And Literally In Our Code,
// Also, Compute Just Means To Calculate, Anyways, Lets Try That Out,
// We'll Do So Above The openingHours Object, Below The Other Part We'll Do Later
// We Then Create A Variable Called weekdays, From Monday To Sunday,
// Now We Want To Take The openingHours Object's Property Names,
// Out Of The weekdays Array, Instead Of Writing Them Manually,
// We Can Do That By Again Using Square Bracket Syntax,
// And Then In There, We Can Put Any Expression Basically,
// So, We Replace The Property Names Of openingHours, With:
// "[weekdays[Insert Position Number]]:" Now We Could Use Destructuring Here,
// But This Is Just A Demonstration To Show You How We Can Compute Property Names,
// I'll Comment Out The Old Property Names For Clarification,
// Oh And We Can Basically Do Anything In There, Like We Can Say:
// [`Day-${8 + 8}`], And It Would Show "Day-16" As The Property Name,
// Anyways, This Was All For Today, Next Up, We'll Be Learning About Optional Chaining😄,
// Again, You've Seen How I Havent Pushed These Subrepos To GitHub In A While😅,
// But A Promise Is A Promise, And This Journey Shall Continue🫡,
// So, Keep Practicing, Analyzing, Researching, And Learning, I'll Cya Later🩵💻😄!