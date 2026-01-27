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

// Today, We Will Go Back To Two Operators That We've Talked About Before,
// But Havent Used Their Full Potential Yet,
// And They Are The "OR(||)" And "AND(&&)" Operators,
// We Can Use Them For Something Called Short Circuiting,
// So Up Until This Point We've Used Logical Operators Only To Combine Boolean Values,
// But We Can Do Alot More With Them Actually, So Lettuce🥬 Begin!

console.log('---- OR ----');
// We'll Start With The OR Operator Here,
console.log(4 || 'James');
// This Is Something We Havent Tried Yet, Which Is To Use Non-Boolean Values,
// As The Operands, And With The Result, We Can See That It Is 4,
// That Means That The Result Of The OR Operator Doesnt Always Have To Be A Boolean,
// This Is Something That I Havent Shown You Before,
// Aswell As Three Other Properties That I Havent Told You About Logical Operators,
// 1: They Can Use ANY Data Type,
// 2: They Can Return ANY Data Type,
// 3: They Do Something Called "Short Circuiting" Or "Short Circuit Evalutation",
// As We Saw Already That They Can Indeed Use And Return Any Data Type,
// Now We Move On About Short-Circuiting, So, In The Case Of The OR Operator,
// Short-Circuiting Means That If The First Value Is A Truthy Value,
// It Will Immediatly Return That First Value, Which Is What We See Here With The 4,
// Because It Is A Truthy Value, So Again, If The First Operand Is A Truthy Value,
// In The OR Operator, Then The Other Operand Will Not Even Be Evaluated,
// And So Thats Why We Mean, By Short Circuiting,
// Now We'll Do Some More Testing:
console.log('' || 'Jaiden');
console.log(true || 0);
console.log(undefined || null);
// Before Looking At In The Console, Try Guessing What The Results Will Be,
// Anyways, The First One Here, Jaiden Is Returned Since The First Value Is Falsy,
// Next, Since The First Value Is Truthy, It Will; Simply Print true In The Console,
// Lastly, We Have undefined And null, Which Are Both Falsy Values,
// Since The First One Is A Falsy Value, fWe Go To The 2nd Operand Which Is null,
// So There Is No Short-Circuiting, And Thats The One Which'll Be Returned,
// Even Though null Itself Is Also A Falsy Value,
// Now, Lets Generalize This To More Operators, So You Can Get The General Rule,
// Of How This Operator Works, No Matter The Number Of Values,
console.log(undefined || 0 || '' || 'Hello' || 24 );
// Here, We Get Hello Printed In The Console, Because It Is The First Truthy Value,
// In This Chain Of OR Operations, We Start With undefined, Then To 0, And '',
// All Of Which Are Falsy Values, Its Until The 4th Operand Where Its A Truthy Value,
// If We Think About It, This Makes Sense, Because Remember That In The Or Operation,
// The Result Is True, If At Least One Operand Is True,
// So If The First Operand Is Already True, JavaScript Wont Have To Look,
// At The Other Values, Because The Result Of The Expression, Will Already Be True Anyway,
// And So It Will Short-Circuit, And Then Simply Return That First Result,
// Now Lets Se A More Practical Application Of This,
// Lets Say That There Might Be A Property On The Restaurant Object,
// With The Number Of Guests, So Something Like This:
// restaurant.numGuests = 16;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// We Dont Know If This Exists, However, We Want To Basically Define A Variable,
// Based On The Number Of Guests, And Set A Default Value If This Doesnt Exist,
// So With The Variable guests1, Then What We Want To Do Is Check If This Exists,
// Using The "?", Then The Result Should Be restaurant.numGuests,
// But If It Doesnt Exist, We Set A Default Value Of 10, Now We console.log guest1,
console.log(guests1);
// The Result, As Expected, Is 10, Since restaurant.numGuests Doesnt Exist,
// And So It Is Undefined, Therefore The Default Value Of 10 Will Be The Result,
// Now If We Do Set The Property, Then guest1 Will Show That Property's Value,
// But Instead Of Doing That, We Can Take Advantage Of Short-Circuiting,
// And The OR Operator, So Lets Again, Write restaurant.numGuests:
const guests2 = restaurant.numGuests || 10;
console.log(guests2);
// Lets Analyze How And Why This Works, So Right Now, restaurant.numGuests Is Undefined,
// So Its A Falsy Value, And As We Already Know, The Second Value Will Be Printed,
// Aswell As The Result Of The OR Operator, Basically That Is Our Defualt Value Of 10,
// But If We Uncomment That restaurant.numGuests = 16, The restaurant.numGuests,
// As The First Operand, Is Now 16, Which Is A Truthy Value, And So The OR Operator,
// Short-Circuits, Becoming The Returned Value, Lets Say The Result Of The Operation,
// So This Is The Way Easier Method Of Setting Default Values,
// Than Having To Deal With This Turnery Operator, Or Worse, An If-Else Statement,
// Anyways, This Was Short-Circuiting With The OR Operator,
// But We Can Do The Same With The AND Operator, Which Also Has Short-Circuiting,

console.log('---- AND ----');
// When It Comes To Short-Circuit Evaluation, The AND Operator,
// Works In The Exact Opposite Way, Of The OR Operator,
console.log(0 && 'Jimmy');
// The Result Of This Is 0, This Means That The And Operator Short-Circuits,
// When The First Value Is Falsy, And Returns That Falsy Value,
// Without Even Evaluating The Second Operand, Which Again,
// Is The Exact Opposite Of What Happens With The OR Operator,
// Now We'll Set It To A Truthy Value, In That Case, Jimmy Is Returned,
console.log(8 && 'Jimmy');
// Once Again, This Makes Sense When We Think About,
// So The AND Operator Is Only True, If All The Operands Are True,
// Meaning, If The First One Is False, The Entire Result Of The AND Operation,
// Will Already Be False Anyway, So No Need To Look At Any Of The Other Operands,
// So Lets Again, Generalize This To Multiple Operands,
console.log('Salve' && 32 && null && 'Jeff');
// The Result, Is Indeed, Null, Why So? Well Lets Apply The Same Logic To This,
// So The First Salve Is A Truthy Value, Same With The Next Number 32,
// Then Comes null, Which Is A Falsy Value, And As We Know,
// If There Is A Falsy Value At A Point, Evalutation No Longer Needs To Continue,
// Because At This Point, The Entire Result Of The AND Operation Is Gonna Be False Anyway,
// As A Result, That Is Simply The Value That Will Return, And It Short-Circuits,
// The Rest Of The Evaluation, So It Will Not Even Take A Look At Jeff There,
// Lets See Another Practical Example For This, We'll Say:
// Practical Example:
if(restaurant.orderPizza) {
  restaurant.orderPizza('Mushrooms', 'Pepperoni');
}
// So Here We're Basically Checking If The orderPizza Method Exists,
// If It Does, We Call It, Now Anyways, Many Times We Can Use The AND Operator,
// To Avoid An If Statement Like This One, Where All We Want To Check,
// Is If A Certain Property Or Value Actually Exists, And In This Case Here,
// What We're Doing Is Basically Pretending That We Dont Know If Orderpizza Exists,
// We First Check If It Exists, And Only Then Execute It, But With The New AND Operator,
// Knowledge That We Just Gained, We Can Do This In A Simpler Way,
restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'Olives');
// This Basically Does The Exact Same Thing As The If-Else Statement Was Doing,
// First By Seeing If The orderPizza Exists, Then, If It Exists,0
// The 2nd Part Will Be Evaluated, In The 2nd Operand, We Then Call The Function,
// Which Is Completely Fine And Acceptable, To Use The 2nd Operand To Call A Function,
// We Can Put Anything There And It Doesnt Have To Be A Single Value,
// And I Am NOT Saying You To Replace All Of Your If-Statements,
// With 'AND' And 'OR' Operators, Definitly Dont Do That😅,
// Anyways, This Was All For Today, This Time I Tried Way Harder To Make This Short,
// But It Still Became Pretty Long😄, But I Promise Next Will Be Shorter😉,
// Keep Analyzing, Researching, Practicing, And Learning, And Happy Coding😄💻💙!