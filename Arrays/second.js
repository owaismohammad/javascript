// const marvel=["spiderman", "ironman","hulk"]
// const dc = ["batman", "superman", "flash"]

// // console.log(marvel.push(dc));

// const all= marvel.concat(dc)
// // console.log(all);

// const all_new = [...marvel, ...dc]
// console.log(all_new)

// console.log(Array.isArray("Hitesh"));
// console.log(Array.from("Hitesh"));


//Object Literals
const mysym = Symbol("mykey1")
const user={
    name:"owais",
    age:19,
    [mysym]:"mykey1",
    location:"lucknow",
    email:"hitesh@go",
    lastLoginDays:["Monday", "saturday"]

}

console.log(user.lastLoginDays);
console.log(user["location"]);
console.log(user);

// Object.freeze(user)

user.greeting=function(){
    console.log("hello world");
}

user.greeting2 = function(){
    console.log(`hlo ${this.name}`);
}

console.log(user.greeting());

console.log(user.greeting2());


const {name: na}= user; //destructuring
console.log(na)