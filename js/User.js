/*global define */
define( [
	'Person'
], function( Person ) {
	
	/**
	 * @class User
	 * @extends Person
	 */
	var User = Person.extend( /** @lends User.prototype */ {
		
		logUsername : function() { console.log( "Username: " + this.username ); }
	
	} );
	
} );