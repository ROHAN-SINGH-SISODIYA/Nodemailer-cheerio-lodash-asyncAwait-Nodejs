var _ = require('lodash');
var mapKeys = require('lodash.mapkeys');
const posts=[
   {id:1,title:'hii'},
   {id:2,title:'bye'},
   {id:3,title:'namaste'},
   {id:4,title:'rohan'},
   {id:5,title:'number 5'},
   {id:6,title:'number 6'}
];

const state = _.mapKeys(posts,'id')
console.log(state);


//insert array of objects
var foo = { a: "a property" };
var bar = { b: 4, c: "an other property" }

var result = _.assign({ d: "an old property" }, foo, bar);
console.log(result);


function getRandomInteger() 
{
    return Math.round(Math.random() * 100);
}

var result = _.times(5, getRandomInteger);
console.log(result);


var users = [
  { firstName: "John", lastName: "Doe", age: 28, gender: "male" },
  { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
  { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
  { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" }
];

var user = _.find(users, { lastName: "Doe", gender: "male" });
user -> { firstName: "John", lastName: "Doe", age: 28, gender: "male" }
console.log(user);

var underAgeUser = _.find(users, function(user) {
	return user.age > 40;
});
console.log(underAgeUser);
underAgeUser -> { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" }


var posts = [
    { id: "1abc", title: "First blog post", content: "..." },
    { id: "2abc", title: "Second blog post", content: "..." },
    // more blog posts
    { id: "34abc", title: "The blog post we want", content: "..." }
    //even more blog posts
];

posts = _.keyBy(posts, "id");

var post = posts["2abc"]

console.log(post);
post -> { id: "34abc", title: "The blog post we want", content: "..." }



var users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 28 },
    { name: "Bill", age: 65 },
    { name: "Emily", age: 17 },
    { name: "Jack", age: 30 }
]

var reducedUsers = _.reduce(users, function (result, user) {
    if(user.age >= 18 && user.age <= 59) {
        (result[user.age] || (result[user.age] = [])).push(user);
    }
  
    return result;
}, {});