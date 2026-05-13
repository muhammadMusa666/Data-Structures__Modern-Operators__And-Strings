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

// Today We Will Be Learning About Something New, Sets,
// In The Past, Javascript Has Always Had Very Little Build In Data Structures,
// But In ES6 Two More Were Introduced, Sets And Maps, So Today We Will Learn About Sets,
// So A Set Is A Collection Of Unique Values, Meaning It Cant Have Any Duplicates,
// Anyways, Lettuce Begin🥬!

const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
// To Create A New Set We Write 'new' Then 'Set', Note That Set Is With A Capital S,
// Then In The Parenthesis We Need To Pass In An Iterable, Which Here Is An Array,
// So I'll Create An Array With A Couple Of Strings, A Few Same To Eachother,
// After That, We Have 6 Strings, But Sets Can Of Course Hold Mix Data Types,
// But First What Do You Think This Set Will Look Like Now That We've Created It,
// Because We Can Clearly See Some Duplicate Strings,
console.log(ordersSet);
// We See That Its Size Is 3, And There Only 3 Values In There Instead Of 6,
// Which Is Right, Thats What Sets Do, They Remove Duplicates,
// Also We Can See That A Set Kind Of Looks Similar To An Array,
// Their Just Values Grouped Together, And Like Arrays, Sets Are Also Iterables,
// But A Set Is Still Very Different From An Array, Thats Because Its Elements,
// Are Unique, And That The Order Of Elements In The Set Is Irrelevant,
// We Will See Why In A Second, Anyways Keep In Mind That Strings Are Also Iterables,
console.log(new Set('Tasmania'));
// As We See In The Console, It Says The String But In Different Elements/Components,
// So The 8 Components In The Console Are Of The 'Tasmania' Iterable, Which Is A String,
// The Set Can Also Be Empty Of Course, Now Lets Learn How To Actually Work With Sets,

// To Get The Size Of A Set:
console.log(ordersSet.size);
// Note It Is Called Size Instead Of Length Like In Arrays,

// Next We Can Check If A Certain Element Is In A Set:
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
// This Is Actually A Method, We Check If Pizza And Bread Is In There,
// It Will End With Either True Or False,
// The has Method Is Similar To The includes Method In Arrays,

// We Can Also Add New Elements To A Set:
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
// Here The Garlic Bread Got Added But Only Once, Because Again, Sets Have To Be Unique,
// Finally We Can Also Delete Elements:
ordersSet.delete('Risotto');
// This Obviously Deletes The Selected Element, Im Putting The console.log,
// Below This Line To Include Both The Add And Delete Methods,
console.log(ordersSet);
// This Is Really Really Easy, And In Arrays, There Really Is No Method,
// That Is This Simple, We'll See How To Delete Elements From Arrays Later,
// Which Is A Little More Complex,
// But Now You Might Ask, How Do We Retrieve Values, Out Of A Set,
// Can We Maybe Use An Index, Like In Arrays, Like Adding [0],
// After orderSet In The console.log Above, The Answe Is No As We Can See,
// It Will Return Undefined No Matter What Number We Put There,
// Because In Sets There Are Actually No Indexes, And Infact,
// There Are No Ways Of Getting Values Out Of A Set, If We Think About This,
// It Makes Sense, So There's Realy No Need For Getting Data Out of A Set,
// Thats Because If All Values Are Unique And If Their Order Doesnt Matter,
// Then There's No Point Of Retrieving Values Out Of A Set,
// All We Need To Know If A Certain Value Is In The Set Or Not,
// Which Is Why We Have The has Method, If Your Goal,
// Was To Actually Store Values In Order, And Then Retrieve It, Then The Best Use Case,
// Is To Use An Array, You Wouldnt Use A Set For That, And So Again, There's No Need,
// For Getting Values Out Of A Set, Because If You Need It, You Will Just Use An Array,
// Finally There Is Actually One More Method Here, But It Isnt That Important,
// All We Can Use It For Is To Basically Delete All Of The Elements Of The Set,
// Which Is This ordersSet.clear(); Adding This Before The console.log,
// Makes So That Every Element In The Set Is Deleted And It Forms An Empty Set,

// Now As I Said In The Beginning, Sets Are Also Iterables, Therefore,
// We Can Loop Over Them:
for(const order of ordersSet) (console.log(order));
// And There They Are In The Console, So Now We Know,
// Looping Is Possible Just Like Any Other Iterable, 

// Alright, So Now That We Know How To Work With Sets,
// Let's See A Big Use Case For Them Right Now, So In A Normal Code Base,
// The Main Use Case Of Set Is Actually To Remove Duplicate Values Of Arrays,
// Example:

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// Now Thats An Array Of All Our Workers In The Restaurant,
// But Now Lets Say That For Some Reason, We Are Interested In Only Knowing,
// Which Positions There Are In Our Restaurant, Or In Other Words, We Would Basically,
// Like To Have A Unique Array Of This staff Array Right,
// So An Array Without The Duplicates, That Would Solve The Problem,
// Lets Create A Set For That,
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
// Now We Got The Set In The Console, With Each Elemnt Being Unique,
// But Now We Actually Want This To Be An Array,
// And The Conversion From A Set To An Array Is Pretty Easy, Because Their Iterables,
// So Remember From Earlier, That The Spread Operator Works On All Iterables Right,
// Which Includes Sets, And So We Can Now Create, An Array Around The new Set(staff),
// Then We Can Unpack That Entire Set Using The Spread Operator(...),
// And These Elements Will Be Put Into The Newly Constructed Array,
// So Now, We End Up With A New Array, Now You Know The Spread Operator Works,
// Just Like On An Array, It Really Works Exactly the Same,
// So It Takes All The Elements Out Of The Iterable, And Essentially Writes Them There,
// Like Comma Separated, Now If We Only Wanted To Know How Many Different Positions,
// There Are, Then The size Property Is Very Useful, To Do So, You'd Have To Do This,
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
// Even Though It Looks A Little Bit Weird, But Thats It, If This Is What We Do,
// Then We Wouldnt Have To Create The Unique Array At All, So If We Didnt Need The Unique Array,
// So All If We Had Was That, The Weird Line Of Code Above,
// And We Wanted To Know How Many Unique Positions There Are, Then That Would Be The Way To Go,
// Same Could Even Be Done By Counting How Many Different Letters There Are In The String,
console.log(new Set('Sudetenland').size);
// As A Conclusion, JSYK, Sets Are Not Intended To Replace Arrays At All,
// So Whenever You Need To Store Values In Order Which Might Containe Duplicates,
// Always Just Use Arrays, That's Also True When You Need To Really Manipulate Data,
// Because Arrays Have Access To Alot Of Great Array Methods,
// Which We'll Study Later, Now Sets Have This Very Useful Property Of Being Unique,
// And Its Also Easy To Interact With Sets By Using All Of Their Straightforward Methods,
// However They Are Not As Nearly As Important As Arrays,
// So Keep Sets In Mind When You Need To Work With Unique Values,
// But Besides That You Can Continue Using Arrays,
// Anyways, Keep Learning, Analyzing, Researching, And Practicing, And Happy Coding😄💻🩵



