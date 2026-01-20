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





// As Said In The Previous Subrepo, Above Code Will Be Used Later In This Section.





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

  order: function(starterIndex, mainIndex) {
    return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function(starterIndex = 1, mainIndex = 0, time = '20:00', address) {
    console.log(`Order Received! ${this.starterMenu[starterIndex]} And ${this.mainMenu[mainIndex]}
    Will Be Delivered To ${address} At ${time}`);
  },
};
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
});

// Today We Will Be Learning How To Destructure Objects, So Just Like Arrays,
// As We Did Previously, But This Time With, Objects Of Course,
// Also, I Added This openingHours Object Here In Our Restaurat Object,
// As You Can See It Is Above The order Function And Below The Rest Of The Restaurant Object,
// Also, To Keep This Short, I Wont Be Specifying Small Things That You Should Already Know,
// Anyways, About Object Destructuring, To Do That, We Use The Curly Braces,
// To Destructure, Which Is Also How We Create Object, Right?
// Then All We Have To Do Is Provide The Variable Names,
// Which Exactly Match The Property Names That We Want To Retrieve From The Object,
// So Here, We Will Destructure, Of Course, The restaurant Object, Here's How:

// First We Take The name, categories, And openingHours,
// And We Dont Need To Manually Skip Elements Like Done In Arrays,
// Aswell As The Order Of The Elements In Objects Dont Matter,
const { name, openingHours, categories } = restaurant;
// Just Like With Arrays, This Creates 3 Brand New Variables,
console.log(name, openingHours, categories);
// So This Is Really Just Used In Modern Web Applications,
// Especially When We Deal With The Result Of An API Call,
// Which Basically Means To Get Data From Another Web Application,
// Like Weather Data Or Data About Movies, That Kind Of Thing,
// And This Data Usually Comes In The Forms Of Objects Basically,
// Then With Destructuring It Really Becomes Easier Because We Write Less Code And ETC,

// Anyways, Now What If We Wanted The Variable Names To Be Different,
// From The Property Names, We Do So Like This:
const {
   name: restaurantName,
   openingHours: hours,
   categories: tags
  } = restaurant;
// Now Of Course We Still Need To Reference The Property Names, Like We Did Before,
// Otherwise JavaScript Has No Way Of Knowing What We Want Actually Want,
// Then After That, Their Names Change, And We Use Them To Log To The Console,
// And We Can See, That They Have Different Variable Names,
// Which Will Be Massively Helpful When Coding With Third-Party Data,
// There's Another Useful Feature For When We Are Dealing With Third-Party Data,
// Like An API Call As I Said Before, It Can Be Really Helpful To Have Default Values,
// For The Case That We're Trying To Read A Property, That Does Not Exist On The Object,
// So Usually Then We Get An Undefined, For Example,
// If Try To Write restaurant.menu, This Would Be Undefined,
// Because There Is No Property Called menu, We Have starterMenu,
// And mainMenu, But Not Just menu, So We Wil Set Default Values, Just Like In Arrays,

// So Lets Say We Are Trying To Destructure The menu,
// Then We Use Equal To Set A Default Value,
// Aswell As With The starterMenu, And Then We Can Combine This Syntax Here,
// With What We Did Previously, Let Say We're Trying To Retrieve The starterMenu,
// But We Just Want To Give It Another Name, We Do starterMenu: starters = [],
const {menu = [], starterMenu: starters = []} = restaurant
// And We Also Give It A Default Value In Case It Doesnt Exist, Which In This Case,
// Is Just An Empty Array, But Actually In This Case It Does Exist,
// Since starterMenu Exists, This Default Value Will Not Apply,
// Instead It Will Apply To The Menu, Because, There Is No Property,
// On The Restaurant Object Called Menu,
console.log(menu, starters);

// Next Up, We Will Talk About Mutating Variables, While Destructuring Objects,
// Which We Did With Arrays When We Were Switching Variables, Remember?
// But This Time, With Objects, It Works A Little Bit Differently,

// Mutating Variables:
// So, I've Made Some Variables Below,
let a = 144;
let b = 67;
const obj = { a: 32, b: 69, c: 666 };
// So, Lettuce🥬 Begin Destructuring This Array,

// Here, We Cant Use Both let Or const Here, Since a And b Are Already Declared Above,
// And With let Will Just Create New Variables, So Infact, We Want To Mutate The Varaibles,
// Also, If We Do This:
// {a, b} = obj;
// Then An Error Will Occur, Because When We Start A Line With A Curly Brace Like This,
// JavaScript Expects A Code Block, And Since We Cannot Assign Anything To A Code Block,
// Like We Did With The Equal Sign, Then We Get An Error In The Console,
// So To Solve This, The Trick Is To Wrap All Of It, Into A Parenthesis,
({a, b} = obj);
console.log(a, b);
// Now It Will Work, And The Numbers Will Show In The Console,
// In Summary, We Did Override The Two Initial Variables,
// But In Order To Do It, We Had To Wrap This Destructuring Assignment,
// Into Parenthesis, Now That We Know How Object Destructuring Works,
// We Will Talk About Nested Objects, Just Like We Did With Nested Arrays,

// So Lets Say That We Wanted To Create Two Variables: 'open' And 'close',
// Which Should Contain open And close Hours For Friday,
// I Mean The fri Object, In The openingHours Object, In The Restaurant Object😅,
// Now The openingHours Is Already An Object That We Have Stored In A Variable,
// So We'll Make That The Object We're Gonna Destructure,
// Nested Objects:
const {fri: {open, close}} = openingHours
console.log(/*fri*/open, close);
// Here, We Get The fri Object In The Console, With The open And close,
// But Remember That We Actually Want Two Variables,
// One Called open, And One Called close, And This Is How That Works,
// So We Know That This Is An Object, And Can Further Destracture That Object,
// Using This Syntax ": {Given Property Name Of A Certain Inner Object}",
// Which In This Case, Is "fri: {open, close}" Then Place open And Close,
// Instead Of fri In The console.log, Also, If You Didnt Know,
// We Can Change The fri: {open, close}, By Even Assiging Different Variables To These,
// So It Is Possible And Completely Fine To Do fri: {open: x, close: y},

// Anyways, Now To Finish, Let Me Actually Show You A Really Cool Practical Application,
// Of Destructuring, And For That, We're Gonna Go Back To Our Restaurant Object,
// And Below The Order Function, Will Create A Method,
// Because Many Times In JavaScript, We Have Functions With Alot Of Parameters,
// And It Can Be Hard To Know The Order Of Parameters,
// For Someone That Is Using That Function, So Instead Of Defining The Parameters Manually,
// We Can Just Pass An Object Into The Function As An Argument,
// The Function Will Then Immediatly Destructure That Object,
// And Here The Method Will Be, About An Order Delivery,
// For Now, I Will Be Calling That Argument Object,
// Then Log That Object To The Console, Then Call It Of Course(restaurant.orderDelivery({})),
// We Can Now Specify Some Options There, Lets Say The Time Of Delivery,
// After That, An Address, And Then The Indexes Of The Starter And Main Menu,
// Now This Is Very Useful, Because In THE Function Arguments,
// We Can Do Destructuring Right Away, For Example, We Can Say,
// starterIndex, mainIndex, address, time, As I Did There,
// Now, We Actually Have Four Variable Names, Since We Did Destructuring In The Function,
// Then We Can Use These Variables To Log A String To The Console,
// By Using Template Literals, With The Values That We Got From The Object,
// We Can Use Some More Knowledge That We Gained Here,
// Which Is The Default Values, We Will Use Them To, Set Defaults Of Course,
// So Lets Say That The starterIndex, Will Be 1 By Default,
// mainIndex Will Be 0 And The time Will Be 20:00 By Default,
// Now We Call The Method Once More, And Specify The Address And starterIndex Only,
// And The Rest Will Be Taken From The Default Values That We Set There,

// Anyways, This Was All For Today, Congratulations For Making This Far😄,
// The Subrepo's I've Been Commiting Are Getting Pretty Long Now,
// Which Makes It Substantially Harder For You To Learn And Understand,
// But I Know You Can Do This, Easily In Fact, Since You Did The Hardest Section,
// Already Before This, Which I Think You Havent Forgotten😅,
// So Even If This Is Long, It Isnt As Confusing As That One Was,
// Because That Needed Extra Knowledge To Continue,
// Which Actually Helped You Get More Sources Other Than From This And Me😉,
// So Keep It Up, I Am Proud Of You🫡,
// Keep On Researching, Analyzing, Researching And Learning,
// And Happy Coding😄💻🩵! Because More Is Coming, And Your Journey Continues🚀!









