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

// Today We Will Be Learning More About Sets, Because,
// Before ES2025, Sets Only Had The 4 Methods We Learnt About Previously,
// But After ES2025, Sets Gained 7 More New Methods,
// Which Makes Them Alot More Useful, Especially When Used Together With Arrays,
// Also, These New Methods Bring Sets Mor On Par With Sets,
// In Other Programming Languages, So, Lettuce Begin🥬!

// Now, Today, We Are Actually Gonna Use Two Data Structures,
// Yes, Which Means We Are Finally Using The Area Of This Starter Code,
// Which We Said Would Be Used In A Later Exercise,
// So The italianFoods And mexicanFoods Sets,
// I Will Comment It Out, And Make A Copy Of It Down Here,
// Where We Can Actually Work With It,
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
// Now Lets Experiment With These New Set Operations,
// So Lets Say That We Have An Application, That Contains These Foods,
// Some Italian And Mexican Foods And In That Application We Needed To Find Out,
// That Which Ingredients Are Present In Both Of The Italian And Mexican Cuisines,
// Well Here By Just Reading The Code We Can See Which Ingredients Are Present In Both😅,
// Of Course Manually, We Can See Garlic And Tomatoes Are In Both😅, 
// But Of Course We Want A Programmmatic Way Of Finding The Common Elements,
// Into Sets Or Arrays, So Now Lets Use The First New Method,
// Which Is The Interaction Method:
const commonIngs = italianFoods.intersection(mexicanFoods);
// What This Will Do, As The Name Suggests, Is Find The Intersection Between The Sets,
// We Could've Also Specified In The Opposite Order, Like mexicanFoods.intersection(italianFoods);
// So The Order Doesnt Really Matter, AnyWho The Result Of The Intersection Method,
// Is A New Set Which Will Only Contain The Elements, That Are Present In Both Sets,
console.log('Intersection', commonIngs);
// I Will Be Adding The Method Name Before The Variable To Avoid Confusion,
// Now What If We Wanted An Array For That, Well Thats Pretty Easy:
console.log([...commonIngs]);
// We Already Learnt About The Spread Operator, Which Makes It Into An Array,
// Infact, That Is Extremely Useful When Working With Arrays,
// Which Is A Way Common Data Structure Than Sets As We Learnt In The Previous Subrepo,
// So Arrays Will Be Seen More When Working, Finding The Same Elements Is Also Common,

// The Same Is True With The Next Method, Which Is The Union Method,
// Which Will Give Us All The Elements Present The Stated Sets But Without Duplicates:
const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log('Union:', italianMexicanFusion);
// It Works As We Expected, The Duplicates Are Removed And One Of Each Are Shown,
// And There Is Actually Another Way Of Achieving This,
// So All We Have To Do Is To Combine Two Arrays, And Then Get Their Unique Values,
// Now, We Will Create A Brand New Array, Then Spread Both Of The Arrays In There,
console.log([...italianFoods, ...mexicanFoods]);
// And It Works, Now If You Wanted The Same Result As Before,
// We Would Have To Actually Create A Set Out Of That,
// Which Would Make It Exactly Same As The Union Method,
// Anyways, This Is How You Would Write It To Make It Result Like A Set:
console.log(new Set([...italianFoods, ...mexicanFoods]));
// Now If You Wanted An Array Out Of This, So Basically Making It Into An Array Again😅,
// We Will Use The Spread Operator Again, This Is Also Getting A Bit Confusing Now😅,
console.log([...new Set([...italianFoods, ...mexicanFoods])]);

// That Method Was Not The Most Useful One I Would Say,
// But The Next Will Be A Bit More Useful, Which Is The Difference Method,
// So The Difference Method Gives Us A New Set, Which Will Contain All The Elements,
// That Are Present In The First Set, But Not In The Second One,
// Basically It Gives Us All The Unique Elements In The First Set,
// Also Here, The Order Where We Specify The Sets Actually Matters,
const unqieItalianFoods = italianFoods.difference(mexicanFoods);
console.log('Difference Italian:',  unqieItalianFoods);
// As We See In The Console, There Are Only 4 Sets,
// Because The Duplicating Elements Are Completely Removed From The First Set,
const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('Difference Mexican:', uniqueMexicanFoods);
// We Changed The Order Here, And Now It Just Shows Mexican Foods,
// Except For The Elements That Were Duplicated And Shown In Both Sets,
// Now All Of These Operations Are Mathematical Ones Existing In Sets In Mathematics,
// So We Can Also See These, In Some Venn Diagrams, You Can Go Search It On MDN Docs,

// We Also Have A Pretty Similar Method, Called The Symmetric Difference,
// Which Will Give Us All The Elements That Are Present In Either Set But Not Both,
// So This Is Basically The Opposite Of Intersection Method,
// Like In A Venn Diagram It Would Give Us Both Sets But Not The Intersected Parts,
const uniqueItalianAndMexicanFoods = italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianAndMexicanFoods);
// And We Get The Four Unique Foods Of Both Mexican And Italian Foods,
// But Not The Ones That Were In Both Of Them, Now There Are 3 Methods Left,
// However I Will Not Be Going Very Deep Into Them, They Are Used To Check,
// Whether One Of The Sets Contains The Other Set, They Are Called,
// isSubsetOf, isSuperSetOf, And isDisjointFrom, There Is No Need To Waste Time,
// On Them, Which Is Why I Will Only Be Doing One Of Them, The isDisjointFrom,
// This One Is Used To Check Whether One Set Is Completely Different,
// From The Another Set, Which Would Mean Their Disjointed:
console.log(italianFoods.isDisjointFrom(mexicanFoods));
// Anyways, This Was All For Today,
// Keep On Learning, Researching, Analyzing, And Researching,
// And Happy Coding😄💻🩵!