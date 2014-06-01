/*global require */
/*require( [
	'Observer',
	'User'
], function( Observer, User ) {

	var observer1 = new Observer( { id: 1, firstName: "Bob", observerName: "Test Observer" } );
	var user1 = new User( { id: 2, lastName: "Doe", username: "jdoe" } );
	
	observer1.logId();
	observer1.logFirstName();
	observer1.logLastName();
	observer1.logObserverName();
	
	user1.logId();
	user1.logFirstName();
	user1.logLastName();
	user1.logUsername();
	
} );*/

define( [
	'Person'
], function( Person ) {

	var person1 = new Person( { id: 1, firstName: "Bob", lastName: "Smith" } );
	
	person1.logId();
	person1.logFirstName();
	person1.logLastName();
	
	return person1;
	
} );