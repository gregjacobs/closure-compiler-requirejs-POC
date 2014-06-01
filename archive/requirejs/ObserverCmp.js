var Person = require("Person"), Observer = Person.extend({constructor:function(a) {
  this._super(arguments);
  this.firstName += " THE OBSERVER";
}, logFirstName:function() {
  this._super(arguments);
  console.log("ZOMG after logFirstName(): " + this.firstName);
}, logObserverName:function() {
  console.log("Observer name: ", this.observerName);
}});

