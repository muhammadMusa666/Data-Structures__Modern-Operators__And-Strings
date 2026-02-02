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

// Today, We Will Be Learning About Something Even More Modern,
// Than The Nullish Coalescing Operator, Are Three So-Called,
// Logical Assignment Operators, That Were Introduced In ES2021,
// So, In Order To See How They Work In An Effective Way, We'll Start by Creating,
// Two New Restaurant Objects, Which Will Be Called "rest1" And "rest2",
const rest1 = {
  name: 'Napoletano',
  // numGuests: 32,
  numGuests: 0,
}

const rest2 = {
  name: 'La Piazza',
  owner: 'Guiseppe Alfredo',
}

// Here, We've Made The Two New Said Restaurant Objects,
// One Having The Name And Number Of Guests, While The Other Has The Owner,
// Instead Of Number Of Guests, And The Name Property, Now What We'll Do,
// Is Set A Default Number Of Guests, For All The Restaurant Objects,
// That Do Not Have That Property, So In This Case Its Just This One Restaurant Here,
// But Lets Pretend That We Got Them, So We Get These Retaurants From Some Kind Of API,
// And Now We Want To Apply Something To All Of Them, In This Case,
// Basically Adding The Number Of Guests Property, To The Objects That Dont Have Them,
// Lets Start By Using The OR Operator Which We Already Know About To Do This,
// rest2.numGuests = rest2.numGuests || 10;
// Remember That This Works Because Of Short-Circuiting,
// Since The First Value Is A Truthy Value, The 2nd Value Wont Even Be Evaluated,
// And If The First Value Is Falsy, The 10 Will Be Returned, As The Default Value Here,
// I Will Now Duplicate This Line Here, Then Do It For Both Resturants Here,
// rest2.numGuests = rest2.numGuests || 10;

// OR Assignment Operator:
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish Assignment Operator ("null" Or "undefined"):
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// AND Assignment Operator:
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
// We See In The Console, That rest1, Having A numGuests, Had The Value Of 20,
// But Since rest2 Didnt Have A numGuests, It Is Given numGuests: 10 As The Default,
// Now, Lettuce Introduce🥬 The Very First Logical Assignment Operator,
// Which Is The OR Assignment Operator, It Sounds Same As The OR Operator,
// But Its A But Different, With This, We'll Be Able To Write The Same Thing,
// As Above With The OR Operators Basically, But In A More Concise Way,
// And Instead Of Repeating The Same Thing As We Did Above,
// We Can Simply Write rest1.numGuests ||= 10;, I Will Write This,
// Above The console.log(s), Also "||= 10" Means OR Equals 10 In Pronounciation,
// This Is The Same As What We Did Before With The OR Operator,
// But As I Said, In A More Conscise, Now To Avoid Confusion,
// I Will Comment Out The Previous OR Operators, Leaving Only The OR Assignment Operators,
// So Now, That Works Beautifully, Except In One Situation,
// Which We've Encountered Before, In The Previous Subrepo,
// For That, First I'll Comment Out The numGuests = 32 In rest1,
// And Write Another numGuests, But Which's Value Is 0,
// Now If We Check The Console, We See That numGuests Is 10 In rest1,
// Why Is This? Well, As We Learned Before, 0 Is A Falsy Value,
// Which Makes rest1 aND rest2 Falsy, Making Them Both The Default numGuests = 10,
// However, We Fortunately Have A Good Way Of Solving This,
// For That, I Will First Of All, Comment Out The rest1.numGuests ||= 10,
// And rest2.numGuests ||= 10, Because They Dont Really Work Right Now,
// Then We Use Another Assignment Operator Below The OR Assignment Operator,
// Called The "Logical Nullish Assignment Operator", Sounds A Bit Complicated,
// But It Really Is That We Change The OR For The Nullish Coalescing Operator,
// ("||=" --> "??="), Now If We Look In The Console, numGuests Is Indeed Back To 0,
// And As We Know, Nullish Means "null" Or "undefined",
// Because We Learned Before Already, null And undefined, Are Treated As Falsy Values There,
// So, In rest1, numGuests Is Zero, Which It Takes As Truthy Values, And Prints It,
// Although In rest2, There Is No numGuests, Meaning Its Undefined, So It Prints 10,
// In A Nutshell, The Nullish Assignment Operator, Will Assign A Value To A Variable,
// If That Variable Is Currently Nullish, Which Is The Case With rest2,
// Now You Can Probably Guess The 3rd Logical Assignment Operator,
// Which Is The "AND Assignment Operator", To Learn About That One,
// Lets Say That We Want To Anonymize The Names, Of The Restaurant Owners,
// So When There Currently Is An Owner, Like In The rest2 Object,
// We Want To Basically Replace The String In rest2, With The String "Anonymous",
// How Can We Do So, With The Stuff That We Already Know? Well, Lets Say,
// rest2.owner = rest2.owner && '<ANONYMOUS>';, And I'll Write This,
// Below The Nullish Assignment Operator, I Will Also Be Commenting Out,
// The Nullish Assignment Operator Part, Now That Thats Done,
// If We Check The Console, We Can See, It Replaces The String That We Had There Before,
// With The "<ANONYMOUS>", So Lets Recap Why This Works, Well Once Again,
// It Is Because Of Short-Circuiting, And In The Particular Case Of The AND Operator,
// It Short-Circuits When The First Value Is Falsy, And Then Immediately Returns,
// That Falsy Value, So In This Case, Thats NOT Whats Happening,
// Because The AND Assignment Operator, Is Truthy Right Now,
// And So the 2nd Value Will Be Evaluated And Returned,
// So Right Now, As We See In The Console, owner Is undefined In rest1,
// Since rest1.owner Doesnt Exist, So The owner Property Is Not There Inside rest1,
// Which Is Why rest1.owner Is undefined, And Since The AND Operator Short-Circuits,
// When The First Value Is Falsy, Then That's The Value Which Is Immediately Returned,
// This Is Something That We've Already Gone Over Before, So I'm Not Going That Deep,
// What I Will Go Deep In, Is That We Can Replace This AND Operator We Used Up There,
// With The AND Assignment Operator, So I Will Comment Out The AND Operator Code,
// We Can Simply Write As We Did With The Others, "&&=, Then The Designated Value,
// Now If We Look In The Console, We See That The owner Property Of rest2,
// Is Set <ANONYMOUS>, And There Is Simply No Property For rest1,
// Unlike Before When We Used The AND Operator It Printed owner: undefined In rest1,
// Anyways, Basically, What The Logical AND Assignment Operator Does,
// Is Assign A Value To A Variable, If It Is Currently Truthy,
// Which Is Why, In rest1, owner Didnt Exist, So Nothing Happened,
// The Object Stayed Exactly The Same, Then Here In rest1, It Was Indeed Truthy,
// So It Was Guiseppe Alfredo, Now Its Replaced With The String Of '<ANONYMOUS>',
// Again, If You Ever Need To Assign A Value To A Variable That Is Already Defined,
// Meaning That Has A Value That Is Currently Truthy,
// Then You Can Use This AND Assignment Operator,
// Anyways, This Was All For Today, This Was Pretty Long,
// As Usual, This Has Become Normal Now, Which I Dont Know Is A Good Or Bad Thing😅,
// But, I Did Try To Keep This Short, Also, The Next Subrepo, Will Be A Challenge,
// About Your Knowledge That You've Gotten From This Section,
// So I Do Hope You Keep Learning And Practicing From This Like I Always Say😄,
// But Anyways, Keep Analyzing, Researching, Practicing, Learning, And Rising🫡,
// Because You'll Have To Do So For The Next Challenge😉,
// Keep On Going, Your Future Successful Self Is Waiting For You💙,
// And Happy Coding😄💻🩵!