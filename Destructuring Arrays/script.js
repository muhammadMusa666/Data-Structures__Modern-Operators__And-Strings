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










// Welcome To The First Subrepo Of This Section, Where We Will Be Destructuring,
// And Learning More About ✨ Arrays ✨, Now Below Is The Code Or,
// Data Needed For First Part Of This Section, So The Above Part As You Can See,
// Thats For The 2nd Part/An Exercise, But Dont Worry, We Will Focus Down Here First😊,
// Then When We Reach The 2nd Part I Will Tell You And We'll Start Working😉,
// On The Part Above, But As Said, We Focus On This For Now😄,
// Which Is Also Why I Have Kept A 10 Line Space Between These Parts😅,
// Anyways, Lets Begin💻,

// So, Destructuring Is An ES6 Feature, And Is Basically A Way Of Unpacking Values,
// From An Array Or An Object Into Separate Variables,
// In Other Words, It Is To Break A Complex Data Structure Down,
// Into A Smaller Data Structure Like A Variable And What Not😄,
// So For Arrays, We Use Destructuring To Retrieve Elements From The Array,
// And Store Them Into Variables In A Very Easy Way, Now, We'll Start At The Bottom,
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex) {
    return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }
}
// Lets Start With A Very Simple Array,
const arr = [2, 3, 4];
// Then Now, If We Wanted To Retrieve Each One Into Its Own Variable,
// Without Destructuring, We Would Do It Like This,
const a = arr[0];
const b = arr[1];
const c = arr[2];

// But Now With Destructuring, We Can Declare All 3 Variables At The Same Time,
const [x, y, z] = arr;
console.log(x, y, z);
// Since We Used a b c, I Instead Used x y z,
// So This Is Destructuring The Array From The Right Side,
// Even Thought This Looks Like An Array, It Really Isnt,
// Its Just The Destructuring Assignment, So Whenever JavaScript Sees,
// In This Case "[x, y, z]", It Knows It Should Do Destructuring,
// Also We Are Not Destroying The Array, Because You Can Test,
// By Doing console.log And See That The Original Array Is Not Affected,
// console.log(arr);

// Now Lets Work A Little Bit With The Data We Have Of Our Restaurant,
// Where We Can See A Couple Of Arrays: categories, starterMenu, mainMenu,
// So Lets Take Some Elements Out Of The categories,

let /* [first, second] */ [, /*second*/primary, , secondary /*fourth*/] = restaurant.categories; // <-- Changed From second And fourth To Primary And Secondary,
console.log(/*second, fourth*/primary, secondary);

// This Will Basically Follow The Order Of The Elements,
// Even If I Wrote 8, 9 Instead, It Would Only Take The First Two,
// So By Taking 'Italian', And 'Pizzeria', It Works Aswell,
// Now What If We Dont Want To Take The First Two, Instead Want The 2nd And 4th,
// For Some Reason, To Do So/That, We Leave A Hole In The Destructuring Operator,
// Simple As That, We Do It By Leaving An Empty Space Like This [1, , 3];
// And So I've Implemented It While Commenting Out The Previous For Reference,
// After Running This, It Shows The 2nd And 4th Element In The categories Array,
// This Is Something Very Powerful And Very Important To Know,
// Anyways, As An Example, Lets Say That The Restaurant Owner,
// Decided To Switch The Primary And Secondary Category,
// Which Right Now Is The 'Pizzeria' And 'Organic',
// For That, I'll Be Changing The Name From second And fourth,
// To primary And secondary, Now If We Switch These Two Variables Without Destructuring,
// It Would Be Done Like This, By Creating A Temporary Variable,

// Switching Variables:
// const temp = primary;
// primary = secondary;
// secondary = temp;
// console.log(primary, secondary);
// This Code Is Commented Out But Still Works,
// Anyways, With Destructuring, We Can Make This Alot Easier,
// We First Start By Creating A New Array With The Two Variabled Inverted,
// So Simply Instead Of Doing [primary, secondary], We Do [secondary, primary],
// Then We Simply Destruct Them, By Putting [primary, secondary] Before It,
[primary, secondary] = [secondary, primary];
console.log(primary, secondary);
// This Is Pretty Much A Trick In Destructuring, There's Another One,
// Where We Can Have A Function Return An Array, Then We Can Immediatly Destruct The Result,
// Into Different Variables, And So This Basically Allows Us To Return Multiple Values,
// From A Function, So, Lets Try That And Write A Function To Order Food,
// So, In Our restaurant, I Will Add A Method,
// Below The mainMenu, Which I Will Call order, And It Will Be A Function,
// Which Will Accept Two Parameters, One For The starterMenu And One For The mainMenu,
// So The Person Will Basically Order By Giving The Index For Each Of The Menus,
// Like So, I Made The Names starterIndex And mainIndex,
// Then, We Will Simply Return The Content Of The Arrays Based On The Given Indexes,
// We Use The 𝙩𝙝𝙞𝙨 Keyword Which We Learned In The Previous Section,
// Then The Rest, What We Did Isnt Destructuring, But Now's The Time We Do It,
const [starter, mainCourse] = restaurant.order(2, 0);
// This Will Select 'Garlic Bread', From The starterMenu,
// And Will Select 'Pizza', From The mainMenu,
// So With That, We Will Receive An Array, Right?
// You Can See It By Putting The restaurant.order(2, 0); In console.log(),
// Anyways, We Can Now Destructure That By Using The Destructuring Assignment,
// Also, I Didnt Use main Since It Was Already Defined, So Instead Used 'mainCourse',
// We Will Now Simply Use console.log,
console.log(starter, mainCourse);
// As You Can See, This Is Basically How We Receive Two return Values From A Function,

// Now That You Know How Arrays Work, What Happens If We Have A Nested Array,
const nested = [2, 4, [5, 6]];
// So How Can We Get The '2' Value Here And The Entire Nested Array?
// Well We Simply Defined Two New Variables, Using The Destructuring Assignment,
// const [i, , d] = nested;
// console.log(i, d);
// This Works Perfec/tly, But Now What If We Actually Wanted All The Individual Values,
// Then, We Would Essentially Have To Do Destructuring Inside Of Destructuring,
// Which Sounds Complicated, But Really Isnt, So For This,
// I Will Be Commenting Out The Two Lines Of Code Above This At Line 142 And 143,
// Anyways, Now We Will Create Three Variables,
// One For The '4' This Time, And The Other Two For '5' And '6',
// So We're Gonna Skip The '2' This Time,
const [, i, [d, k]] = nested;
// After The 'i', We Can Destruct The Inner Array Immediately,
// So We Use The Destructuring Here Again(The Brackets), Then With 'd' And 'k',
console.log(i, d, k);
// So This Is "Nested Destructuring" Which Is Basically,
// Destructuring Inside Of Destructuring, Now To Finish,
// There Is One More Feature About Destructuring That I Wanna Show You Guys,
// Its That We Can Set Default Values For The Variables When We're Extractin'em(😆),
// That Is Very Useful In The Case Where The Length Of An Array Is Unknown,
// Which Can Sometimes Happen In Real World Applications,
// So If We Have An Array That Is Shorter Than We Might Think,
// Then We Might Try To Unpack The Array, In Positions That Dont Even Exist,
// For This, Lets Say That We Have An Array With 8 And 16,
// Which We Are Trying To Destructure, So Lets Pretent That We Dont Know The Array,
const [p=32, q=32, r=32] = [8, 16];
// So Here We Might Try To Take Three Elements Out Of The Array,
// By Again, Destructuring, I'll Call Them P, Q, R,
// Then We'll Log Them To The Console,
console.log(p, q, r);
// And For The r, We Get undefined, But Since We Can Make Default Values,
// So I'll Set All Of Them To A Certain Number, And r Will Then Get That Number,

// So That Was All For Today, I Dont Have Much To Say Right Now,
// But Good Luck, Because This Was Incredibly Long,
// So Keep Practicing, Analyzing, And Researching,
// Along With The Help Of Any other Sources You Have,
// Happy Coding, And I'll See You In The Next Subrepo😄💻🩵!


