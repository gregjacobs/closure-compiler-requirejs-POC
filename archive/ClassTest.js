/*global Class */

/**
 * @class Person
 */
var Person = Class.create( /** @lends Person.prototype */ {
    
	/**
	 * @constructor
	 */
	constructor : function( cfg ) {
	    for( var prop in cfg ) {
			this[ prop ] = cfg[ prop ];
		}
	},
	
	logId : function() { console.log( "Id: " + this.id ); },
	logFirstName : function() { console.log( "First Name: " + this.firstName ); },
	logLastName : function() { console.log( "Last Name: " + this.lastName ); }
	
} );



/**
 * @class Observer
 * @extends Person
 */
var Observer = Person.extend( /** @lends Observer.prototype */ {

	constructor : function( cfg ) {
		this._super( arguments );
		
		this.firstName += " THE OBSERVER";
	},
	
	logFirstName : function() {
		this._super( arguments );
		
		console.log( "ZOMG after logFirstName(): " + this.firstName );
	},
	
	logObserverName : function() { console.log( "Observer name: ", this.observerName ); }
	
} );


/**
 * @class User
 * @extends Person
 */
var User = Person.extend( /** @lends User.prototype */ {
	
	logUsername : function() { console.log( "Username: " + this.username ); }

} );



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