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

// Today We Will Learn About Looping Objects,
// So Looping Object Keys, Values, And Entries,
// Yes Its Possible To Loop Over Objects, But In An Indirect Way,
// Anyways, Without Further Ado, Lettuce Begin🥬!

// So We Have Different Options Here, Depending On What Exactly We Want To Loop Over,
// Do We Want To Loop Over The Objects, Property Names, Over The Values Or Both Together,
// We'll Start By Simply Looping Over Property Names, Also Remember,
// Their Also Called Keys, Now Ultimately We Will Have To Use The for-of Loop,
// To Loop Over The Array, But Again, We're Gonna Do That In An Indirect Way,
// So We're Not Looping Over The Object Itself, Instead We Will Loop Over An Array,
// PROPERTY NAMES:
const properties = Object.keys(openingHours);
console.log(properties)

let openStr =/*console.log*/(`We Are Open On ${properties.length} Days!:`);

for (const day of /*Object.keys(openingHours)*/ properties) {
  // console.log(day);
  openStr += `${day},`
};

console.log(openStr);
// console.log To Test It, Now I'll Explain What Happened,
// We Get thu, fri, sat, Which Are Exactly The Three Key Names Of The Object,
// Now We'll Take A Closer Look At These Mysterious Object.keys,
// And We'll Do That Right Above The for-of loop, After Doing So,
// We See That Is Is Indeed An Array With The Three Property Names,
// Also We Can Actually Use This To Now Compute How Many Properties Are In The Object,
// So Lets Say We Wanted To Print A String Saying How Many Days The Restaurant Is Open,
// I'll Add It Between The for-of Loop, And The Properties Variable,
// Now In The Console, We Obviously Get The Number Of Properties And The String,
// And Now, The Object.keys(openingHours), Is What We'll Be Looping Over,
// So I'll Just Comment Out The Object.keys(openingHours) Part Just So You Know,
// Then Add The New One In There, So properties, Which Is Why I Called The Variable,
// "day", Because This Array Basically Contains 3 Days, Now Lets Do Something Cool,
// And Store The Middle Line Of Code With The String In A Variable,
// We'll Use let, Again I'll Comment Out The console.log Just So You Know,
// Then We'll Add A Colon After The Last Word Of The String, So 'Days!',
// Thats Because Now Using The Loop, I Will Basically Keep Adding To The String,
// So Now, I Will Replace The console.log(day); With openStr, By Commenting It Out,
// With The console.log At The End Of Course, Anyways, This Was Great,
// Thats Property Names For You, Next Is Property Values,
// Because, What If We Actually Wanted The Values Instead Of The Names?

// PROPERTY VALUES,
const values = Object.values(openingHours);
console.log(values);
// To Do So, We Would Simply Use Object.values, And After We Do The Rest,
// The console.log It, We See That They're Exactly The Three Values As We Specified,
// In The openingHours Object Almost At The Top,
// So Before We Had The Keys, Now We Have The Values,
// And There's No Need To Loop Over Again,
// Because Its Going To Work Exactly The Same As The for-of Loop We Used,
// With properties, In The Property Names Part,
// Now To Really Simulate Looping Over The Entire Object, We Need The Entries,
// And Entries Are Basically Just Names + Values Together,
// I Think We've Used entries Before, When We Looped Over Some Array I Think,
// Where The Entries Returned The Index Number And The Element Itself,
// And So We Can Do Something Similar On Objects,
// Where It Also Returns The Key And The Value,
// Now It Works Differently On Objects, Because Its Not Going To Be A Method,
// That We Call On The Object Itself, So Unlike Before With Arrays,
// We Will Do It Differently This Time, We Will Use Object.entries,
// Entire Object:
const entries = Object.entries(openingHours);
console.log(entries);
// Then We Pass In The openingHours Once Again,
// So This Distinction Between The Array And The Object,
// Is Important As We Loop Over The Entire Object,
// People Often Run Into That Problem Themselves At Some Point,
// Which Is Why Im Telling You About It, We Will Also Store It In An Object,
// Then We'll Log It To The Console, And We See What We Expected, Hopefully You Did😅,
// So All Of The Keys, Values And Entries Basically Transformed The Object Into An Array,
// In Each Of The Arrays We First Have The Key, Then The Value,
// Now, We Can Use This To Basically Loop Over The Object,
for(const [key, {open, close}] of entries) {
  console.log(/*x*/`On ${key} We Open At ${open} And Close At ${close}`);
}
// We'll Call The Variable X For Now, Then We Will Take The X We Just Made,
// And Then Log It To The Console, I'll Comment Out The console.log(entries) Above,
// So That We Dont Confuse Them And Dont Make The Console Messy,
// Though Its Your Choice And You Can Uncomment It If You Like,
// Now We Have Each Key And Value, So Now We Want To Print To The Console A String,
// So I'll Repalce The X With Backticks, Then Use Template Literals,
// Im Using These Variable Before Defining Them So Its Easier To Say What We Want To Define,
// For Example, I'll Add An open And close Variable In There Too,
// Now We Will Do This By Using Destructuring Right There, Just Like We Did With Arrays,
// We Could Replace The const x With const [key, value],
// Because The First One Is The Key, And The 2nd One Is The Value,
// But We Already Know That The value Is An Object, So Therefore,
// We Can Immediately Destructure That Object Here,
// So, Instead We Will Do const [key, {open, close}],
// By Doing This We Specify The Property Names Exactly,
// So They Get Destructured, And Thus It Works
// We End Up With Some Strings That Get All The Data Out Of The Object,
// That {open, close} Part Is Necessary Because The Value Itself Is Also An Object,
// But If We Had A More Simple Object With A More Simpler Value,
// Then You Would Of Course Only Do [key, value] As Destructuring,
// And Of Course You Could Give Them Other Names As You Like,
// Anyways, This Was All For Today, Next Lecture WIll Be A Challenge,
// Hopefully This Subrepo Wasnt Too Long😅, But,
// Keep Practicing, Learning, Analyzing And Researching, And Happy Coding🩵💻😄!