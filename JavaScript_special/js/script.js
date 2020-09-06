// function Dog(name) {
// this.name = name;
// }
// Dog.prototype.bark = function () {
// console.log(this.name + " likes barking! Bark!");
// }
// var max = new Dog("Max", "Buddy");
// max.bark(); 

var names2 = ["Yaakov", "Jhon", "Joe"];

// var myObj = {
	// name: "Yaakov",
	// course: "HTML/CSS/JS",
	// platform: "Coursera"
// };
// for (var prop in myObj) {
	// console.log(prop + ": " + myObj[prop])
// }

for (var name in names2) {
	console.log("Hello " + names2[name]);
}