var Class = require("Class"), Person = Class.create({constructor:function(a) {
  for (var b in a) {
    this[b] = a[b];
  }
}, logId:function() {
  console.log("Id: " + this.id);
}, logFirstName:function() {
  console.log("First Name: " + this.firstName);
}, logLastName:function() {
  console.log("Last Name: " + this.lastName);
}});
module.exports = Person;
var Person = require("Person"), person1 = new Person({id:1, firstName:"Bob", lastName:"Smith"});
person1.logId();
person1.logFirstName();
person1.logLastName();
module.exports = person1;

